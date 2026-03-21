import { MapPin, ExternalLink } from "lucide-react";

export default function ResourceHubCard({ resource }) {
  return (
    <div className="card resource">
      <div>
        <div>
          <h3 className="resource-title">
            {resource.name}
          </h3>
          <p className="resource-type">
            {resource.type}
          </p>
        </div>

        <span className="badge">
          {resource.category}
        </span>
      </div>

      <div className="resource-card-location">
        <MapPin size={16} />
        <span>
          {resource.location}
        </span>
      </div>

      <p className="resource-description">
        {resource.summary}
      </p>

      <div>
        <p className>
          Best for
        </p>
        <p className="resource-serves">
          {resource.serves}
        </p>
      </div>

      <button
        type="button"
        className="btn"
        onClick={() => window.open(resource.website)}
      >
        Visit Resource <ExternalLink size={16} />
      </button>
    </div>
  );
}