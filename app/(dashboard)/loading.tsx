export default function DashboardLoading() {
  return (
    <div className="d-flex flex-center content-min-h" aria-hidden="true">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading…</span>
      </div>
    </div>
  );
}
