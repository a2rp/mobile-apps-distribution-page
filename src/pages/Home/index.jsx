import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import AppPreviewModal from "../../components/AppPreviewModal";
import AppSearch from "../../components/AppSearch";
import AppShare from "../../components/AppShare";
import androidAppsRoadmap from "../../data/androidAppsRoadmap";

import { Styled } from "./styled";

const APPS_PER_PAGE = 6;

const ALL_CATEGORY = {
    id: "all",
    label: "All Apps",
    description: "Browse all available mobile applications.",
};

const ROADMAP_CATEGORIES = androidAppsRoadmap.map((category) => ({
    id: category.id,
    label: category.category,
    description: `Browse available apps from ${category.category}.`,
}));

const DISPLAY_CATEGORIES = [ALL_CATEGORY, ...ROADMAP_CATEGORIES];

const CATEGORY_IDS = new Set(DISPLAY_CATEGORIES.map((category) => category.id));

const APP_CATEGORY_BY_ID = new Map([
    ...androidAppsRoadmap.flatMap((category) =>
        category.apps.map((app) => [app.id, category.id]),
    ),
    ["hello-world", "essential-everyday-apps"],
]);

const getPageFromSearchParams = (searchParams) => {
    const pageValue = searchParams.get("page");

    if (!pageValue || !/^\d+$/.test(pageValue)) {
        return 1;
    }

    const parsedPage = Number(pageValue);

    if (!Number.isSafeInteger(parsedPage) || parsedPage < 1) {
        return 1;
    }

    return parsedPage;
};

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [apps, setApps] = useState([]);
    const [selectedPreview, setSelectedPreview] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const categoryFromUrl = searchParams.get("category") || "all";

    const activeTab = CATEGORY_IDS.has(categoryFromUrl)
        ? categoryFromUrl
        : "all";

    const searchQuery = searchParams.get("search") || "";

    const requestedPage = getPageFromSearchParams(searchParams);

    useEffect(() => {
        const controller = new AbortController();

        const loadApps = async () => {
            try {
                setIsLoading(true);
                setError("");

                const response = await fetch(
                    `${import.meta.env.BASE_URL}data/apps.json`,
                    {
                        signal: controller.signal,
                    },
                );

                if (!response.ok) {
                    throw new Error("Unable to load mobile apps.");
                }

                const data = await response.json();

                setApps(Array.isArray(data.apps) ? data.apps : []);
            } catch (loadError) {
                if (loadError.name !== "AbortError") {
                    setError(loadError.message);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        };

        loadApps();

        return () => {
            controller.abort();
        };
    }, []);

    const updateUrl = useCallback(
        (
            { category = "all", page = 1, search = "" },
            { replace = false } = {},
        ) => {
            const nextCategory = CATEGORY_IDS.has(category) ? category : "all";

            const validPage = Number.isSafeInteger(page) && page > 0 ? page : 1;

            const nextPage = nextCategory === "all" ? validPage : 1;

            const nextParams = new URLSearchParams();

            nextParams.set("category", nextCategory);

            nextParams.set("page", String(nextPage));

            if (search) {
                nextParams.set("search", search);
            }

            setSearchParams(nextParams, {
                replace,
            });
        },
        [setSearchParams],
    );

    const searchMatchedApps = useMemo(() => {
        const normalizedQuery = searchQuery.trim().toLowerCase();

        if (!normalizedQuery) {
            return apps;
        }

        return apps.filter((app) => {
            const searchableContent = [
                app.name,
                app.description,
                app.packageName,
                app.platform,
                app.version,
                app.status,
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();

            return searchableContent.includes(normalizedQuery);
        });
    }, [apps, searchQuery]);

    const categoryCounts = useMemo(() => {
        const counts = {
            all: searchMatchedApps.length,
        };

        searchMatchedApps.forEach((app) => {
            const categoryId = APP_CATEGORY_BY_ID.get(app.id);

            if (!categoryId) {
                return;
            }

            counts[categoryId] = (counts[categoryId] || 0) + 1;
        });

        return counts;
    }, [searchMatchedApps]);

    const filteredApps = useMemo(() => {
        if (activeTab === "all") {
            return searchMatchedApps;
        }

        return searchMatchedApps.filter(
            (app) => APP_CATEGORY_BY_ID.get(app.id) === activeTab,
        );
    }, [activeTab, searchMatchedApps]);

    const totalPages = useMemo(() => {
        if (activeTab !== "all") {
            return 1;
        }

        return Math.max(1, Math.ceil(filteredApps.length / APPS_PER_PAGE));
    }, [activeTab, filteredApps.length]);

    const currentPage =
        activeTab === "all"
            ? Math.min(Math.max(requestedPage, 1), totalPages)
            : 1;

    useEffect(() => {
        if (isLoading) {
            return;
        }

        const normalizedParams = new URLSearchParams();

        normalizedParams.set("category", activeTab);

        normalizedParams.set("page", String(currentPage));

        if (searchQuery) {
            normalizedParams.set("search", searchQuery);
        }

        if (normalizedParams.toString() !== searchParams.toString()) {
            setSearchParams(normalizedParams, {
                replace: true,
            });
        }
    }, [
        activeTab,
        currentPage,
        isLoading,
        searchParams,
        searchQuery,
        setSearchParams,
    ]);

    const visibleApps = useMemo(() => {
        if (activeTab !== "all") {
            return filteredApps;
        }

        const startIndex = (currentPage - 1) * APPS_PER_PAGE;

        const endIndex = startIndex + APPS_PER_PAGE;

        return filteredApps.slice(startIndex, endIndex);
    }, [activeTab, currentPage, filteredApps]);

    const activeCategory = DISPLAY_CATEGORIES.find(
        (category) => category.id === activeTab,
    );

    const handleTabChange = (categoryId) => {
        updateUrl({
            category: categoryId,
            page: 1,
            search: searchQuery,
        });
    };

    const handleSearchChange = (value) => {
        updateUrl(
            {
                category: activeTab,
                page: 1,
                search: value,
            },
            {
                replace: true,
            },
        );
    };

    const handlePageChange = (page) => {
        const nextPage = Math.min(Math.max(page, 1), totalPages);

        updateUrl({
            category: activeTab,
            page: nextPage,
            search: searchQuery,
        });
    };

    const handleOpenPreview = (app) => {
        if (!app.previewImage) {
            return;
        }

        setSelectedPreview(app);
    };

    const handleClosePreview = useCallback(() => {
        setSelectedPreview(null);
    }, []);

    const selectedPreviewImage = selectedPreview?.previewImage
        ? `${import.meta.env.BASE_URL}${selectedPreview.previewImage}`
        : "";

    const handleCardPointerMove = (event) => {
        if (event.pointerType !== "mouse") {
            return;
        }

        const card = event.currentTarget;
        const rect = card.getBoundingClientRect();

        const pointerX = event.clientX - rect.left;

        const pointerY = event.clientY - rect.top;

        const horizontalPercentage = pointerX / rect.width;

        const verticalPercentage = pointerY / rect.height;

        const rotateY = (horizontalPercentage - 0.5) * 8;

        const rotateX = (0.5 - verticalPercentage) * 8;

        card.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);

        card.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);

        card.style.setProperty("--glow-x", `${horizontalPercentage * 100}%`);

        card.style.setProperty("--glow-y", `${verticalPercentage * 100}%`);
    };

    const handleCardPointerLeave = (event) => {
        const card = event.currentTarget;

        card.style.setProperty("--rotate-x", "0deg");

        card.style.setProperty("--rotate-y", "0deg");

        card.style.setProperty("--glow-x", "50%");

        card.style.setProperty("--glow-y", "50%");
    };

    return (
        <Styled.Wrapper>
            <Styled.Hero>
                <Styled.Container>
                    <Styled.Eyebrow>a2rp Mobile Apps</Styled.Eyebrow>

                    <Styled.Title>
                        Mobile apps built for everyday use
                    </Styled.Title>

                    <Styled.Description>
                        Explore useful Android applications created by Ashish
                        Ranjan for everyday tasks, productivity, learning,
                        safety and more.
                    </Styled.Description>
                </Styled.Container>
            </Styled.Hero>

            <Styled.AppsSection>
                <Styled.Container>
                    {isLoading && (
                        <Styled.LoadingState>
                            <Styled.Spinner />
                        </Styled.LoadingState>
                    )}

                    {!isLoading && error && (
                        <Styled.MessageState>
                            <Styled.MessageTitle>
                                Apps could not be loaded
                            </Styled.MessageTitle>

                            <Styled.MessageText>{error}</Styled.MessageText>
                        </Styled.MessageState>
                    )}

                    {!isLoading && !error && (
                        <>
                            <div className="searchArea">
                                <AppSearch
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                            </div>

                            <Styled.Tabs
                                role="tablist"
                                aria-label="Mobile app categories"
                            >
                                {DISPLAY_CATEGORIES.map((category) => (
                                    <Styled.TabButton
                                        key={category.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={
                                            activeTab === category.id
                                        }
                                        $active={activeTab === category.id}
                                        onClick={() =>
                                            handleTabChange(category.id)
                                        }
                                    >
                                        <span>{category.label}</span>

                                        <span className="tabCount">
                                            {categoryCounts[category.id] || 0}
                                        </span>
                                    </Styled.TabButton>
                                ))}
                            </Styled.Tabs>

                            {activeCategory && (
                                <Styled.CategoryDescription>
                                    {activeCategory.description}
                                </Styled.CategoryDescription>
                            )}

                            {visibleApps.length > 0 ? (
                                <>
                                    <Styled.Grid>
                                        {visibleApps.map((app) => {
                                            const iconPath = app.icon
                                                ? `${import.meta.env.BASE_URL}${app.icon}`
                                                : "";

                                            const previewPath = app.previewImage
                                                ? `${import.meta.env.BASE_URL}${app.previewImage}`
                                                : "";

                                            const shareUrl =
                                                app.releaseUrl || app.apkUrl;

                                            return (
                                                <Styled.AppCard
                                                    key={app.id}
                                                    onPointerMove={
                                                        handleCardPointerMove
                                                    }
                                                    onPointerLeave={
                                                        handleCardPointerLeave
                                                    }
                                                >
                                                    <div className="cardTop">
                                                        <Styled.AppIcon>
                                                            {iconPath ? (
                                                                <img
                                                                    src={
                                                                        iconPath
                                                                    }
                                                                    alt={`${app.name} icon`}
                                                                />
                                                            ) : (
                                                                "AR"
                                                            )}
                                                        </Styled.AppIcon>

                                                        <div className="cardTopActions">
                                                            {app.status && (
                                                                <Styled.Status>
                                                                    {app.status}
                                                                </Styled.Status>
                                                            )}

                                                            <AppShare
                                                                appName={
                                                                    app.name
                                                                }
                                                                shareUrl={
                                                                    shareUrl
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    {previewPath ? (
                                                        <button
                                                            className="previewButton"
                                                            type="button"
                                                            onClick={() =>
                                                                handleOpenPreview(
                                                                    app,
                                                                )
                                                            }
                                                            aria-label={`Open ${app.name} preview`}
                                                        >
                                                            <img
                                                                src={
                                                                    previewPath
                                                                }
                                                                alt={`${app.name} preview`}
                                                            />

                                                            <span>
                                                                View Preview
                                                            </span>
                                                        </button>
                                                    ) : (
                                                        <div className="previewPlaceholder">
                                                            Preview coming soon
                                                        </div>
                                                    )}

                                                    <Styled.AppContent>
                                                        <Styled.AppName>
                                                            {app.name}
                                                        </Styled.AppName>

                                                        <Styled.AppDescription>
                                                            {app.description}
                                                        </Styled.AppDescription>

                                                        <div className="appMeta">
                                                            {app.version && (
                                                                <span>
                                                                    Version{" "}
                                                                    {
                                                                        app.version
                                                                    }
                                                                </span>
                                                            )}

                                                            {app.platform && (
                                                                <span>
                                                                    {
                                                                        app.platform
                                                                    }
                                                                </span>
                                                            )}
                                                        </div>

                                                        <div className="appActions">
                                                            {app.apkUrl && (
                                                                <a
                                                                    className="downloadButton"
                                                                    href={
                                                                        app.apkUrl
                                                                    }
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    download
                                                                >
                                                                    Download APK
                                                                </a>
                                                            )}

                                                            {app.releaseUrl && (
                                                                <a
                                                                    className="releaseButton"
                                                                    href={
                                                                        app.releaseUrl
                                                                    }
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                >
                                                                    Release
                                                                    Notes
                                                                </a>
                                                            )}
                                                        </div>
                                                    </Styled.AppContent>
                                                </Styled.AppCard>
                                            );
                                        })}
                                    </Styled.Grid>

                                    {activeTab === "all" && totalPages > 1 && (
                                        <Styled.Pagination>
                                            <Styled.PaginationButton
                                                type="button"
                                                disabled={currentPage === 1}
                                                onClick={() =>
                                                    handlePageChange(
                                                        currentPage - 1,
                                                    )
                                                }
                                            >
                                                Previous
                                            </Styled.PaginationButton>

                                            <div className="pageNumbers">
                                                {Array.from(
                                                    {
                                                        length: totalPages,
                                                    },
                                                    (_, index) => index + 1,
                                                ).map((page) => (
                                                    <Styled.PaginationButton
                                                        key={page}
                                                        type="button"
                                                        $active={
                                                            currentPage === page
                                                        }
                                                        aria-current={
                                                            currentPage === page
                                                                ? "page"
                                                                : undefined
                                                        }
                                                        onClick={() =>
                                                            handlePageChange(
                                                                page,
                                                            )
                                                        }
                                                    >
                                                        {page}
                                                    </Styled.PaginationButton>
                                                ))}
                                            </div>

                                            <Styled.PaginationButton
                                                type="button"
                                                disabled={
                                                    currentPage === totalPages
                                                }
                                                onClick={() =>
                                                    handlePageChange(
                                                        currentPage + 1,
                                                    )
                                                }
                                            >
                                                Next
                                            </Styled.PaginationButton>

                                            <Styled.PaginationInfo>
                                                Page {currentPage} of{" "}
                                                {totalPages}
                                            </Styled.PaginationInfo>
                                        </Styled.Pagination>
                                    )}
                                </>
                            ) : (
                                <Styled.MessageState>
                                    <Styled.MessageTitle>
                                        {searchQuery
                                            ? "No matching apps found"
                                            : "No apps available yet"}
                                    </Styled.MessageTitle>

                                    <Styled.MessageText>
                                        {searchQuery
                                            ? "Try searching with a different app name or keyword."
                                            : "Applications in this category will be added soon."}
                                    </Styled.MessageText>
                                </Styled.MessageState>
                            )}
                        </>
                    )}
                </Styled.Container>
            </Styled.AppsSection>

            <AppPreviewModal
                appName={selectedPreview?.name || ""}
                imageUrl={selectedPreviewImage}
                isOpen={Boolean(selectedPreview)}
                onClose={handleClosePreview}
            />
        </Styled.Wrapper>
    );
};

export default Home;
