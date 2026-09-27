export default function StatusBadge({ status }) {
  return <span className={`badge badge--status ${status === 'Completed' ? 'is-done' : 'is-wip'}`}>{status}</span>
}
