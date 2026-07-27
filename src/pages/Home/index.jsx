import { useEffect, useMemo, useState } from "react";

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

                                        const shareUrl =
                                            app.releaseUrl || app.apkUrl;

                                        return (
                                            <Styled.AppCard key={app.id}>
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
        </Styled.Wrapper>
    );
};

export default Home;
