export default function ResourceHubSectionHeader({ title, description }) {
  return (
    <div>
      <h2 className="title">
        {title}
      </h2>
      <p className="description">
        {description}
      </p>
    </div>
  );
}