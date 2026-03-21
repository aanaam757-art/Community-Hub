import React, { useMemo, useState } from "react";
import { Search, Filter } from "lucide-react";
import ResourceHubCard from "../components/ResourceHubCard";
import ResourceHubSectionHeader from "../components/ResourceHubSectionHeader";
import { resources, categories } from "../data/resources";

export default function DirectoryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesCategory = category === "All" || resource.category === category;

      const combinedText = [
        resource.name,
        resource.category,
        resource.type,
        resource.location,
        resource.summary,
        ... resource.serves,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = combinedText.includes(query.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section className="section">
      <div className="container">
        <ResourceHubSectionHeader
          title="Find local resources"
          description="Search by keyword and filter by category to find support services and programs."
        />

        <div className="card filter-box">
          <div className="filters">
            <div>
              <Search size={16} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search food, clothing, housing, programs, referrals..."
                className="input"
              />
            </div>

            <div>
              <Filter size={16} />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="select"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <p>
            Showing <span>{filteredResources.length}</span> resource
            {filteredResources.length === 1 ? "" : "s"}
          </p>

          <div className="category-filters">
            {categories.slice(1).map((item) => {
              const isActive = category === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(isActive ? "All" : item)}
                  className={`filter-btn ${isActive ? "filter-btn-active" : ""}`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid-cards">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <ResourceHubCard key={resource.id} resource={resource} />
            ))
          ) : (
            <div className="card no-match">
              <p>No matches found</p>
              <p>
                Try a broader keyword or switch the category filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}