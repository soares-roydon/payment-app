import { BalanceCard } from "../components/BalanceCard";
import { Search } from "../components/Search";
import { Table } from "../components/Table";

export function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 mx-4 mt-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <BalanceCard />
      </div>
      <div className="grid mx-4 my-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Search />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Table />
      </div>
    </>
  );
}
