import css from "../TransactionHistory/TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.headTable}>
        <tr>
          <th className={css.tdTable}>Type</th>
          <th className={css.tdTable}>Amount</th>
          <th className={css.tdTable}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.bodyTable}>
        {items.map((item) => (
          <tr key={item.id} className={css.trTable}>
            <td className={css.tdTable}>{item.type}</td>
            <td className={css.tdTable}>{item.amount}</td>
            <td className={css.tdTable}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
