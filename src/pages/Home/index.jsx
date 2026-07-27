import { useCallback, useEffect, useMemo, useState } from "react";

import AppPreviewModal from "../../components/AppPreviewModal";
import AppSearch from "../../components/AppSearch";
import AppShare from "../../components/AppShare";
import { Styled } from "./styled";

const ALL_CATEGORY = {
    id: "all",
    label: "All Apps",
    description: "Browse all available mobile applications.",
};

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [apps, setApps] = useState([]);
    const [activeTab, setActiveTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedPreview, setSelectedPreview] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

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

                setCategories(
                    Array.isArray(data.categories) ? data.categories : [],
                );

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

    const displayCategories = useMemo(() => {
        return [ALL_CATEGORY, ...categories];
    }, [categories]);

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
        return searchMatchedApps.reduce(
            (counts, app) => {
                if (!app.category) {
                    return counts;
                }

                counts[app.category] = (counts[app.category] || 0) + 1;

                return counts;
            },
            {
                all: searchMatchedApps.length,
            },
        );
    }, [searchMatchedApps]);

    const filteredApps = useMemo(() => {
        if (activeTab === "all") {
            return searchMatchedApps;
        }

        return searchMatchedApps.filter((app) => app.category === activeTab);
    }, [activeTab, searchMatchedApps]);

    const activeCategory = displayCategories.find(
        (category) => category.id === activeTab,
    );

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
                        Explore free applications, premium tools and
                        experimental mobile projects created by Ashish Ranjan.
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
                                    onChange={setSearchQuery}
                                />
                            </div>

                            <Styled.Tabs
                                role="tablist"
                                aria-label="Mobile app categories"
                            >
                                {displayCategories.map((category) => (
                                    <Styled.TabButton
                                        key={category.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={
                                            activeTab === category.id
                                        }
                                        $active={activeTab === category.id}
                                        onClick={() =>
                                            setActiveTab(category.id)
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

                            {filteredApps.length > 0 ? (
                                <Styled.Grid>
                                    {filteredApps.map((app) => {
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
                                                                src={iconPath}
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
                                                            appName={app.name}
                                                            shareUrl={shareUrl}
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
                                                            src={previewPath}
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
                                                                {app.version}
                                                            </span>
                                                        )}

                                                        {app.platform && (
                                                            <span>
                                                                {app.platform}
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
                                                                Release Notes
                                                            </a>
                                                        )}
                                                    </div>
                                                </Styled.AppContent>
                                            </Styled.AppCard>
                                        );
                                    })}
                                </Styled.Grid>
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
