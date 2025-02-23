"use client";

import React, { useState } from "react";
import { FiArrowUp, FiArrowDown, FiInfo } from "react-icons/fi";

interface Transaction {
  id: string;
  date: string;
  amount: number;
  type: "Investment" | "Withdrawal" | "Dividend";
  status: "Completed" | "Pending" | "Failed";
}

const TransactionsPage: React.FC = () => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Transaction;
    direction: "asc" | "desc";
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const transactions: Transaction[] = [
    {
      id: "TX1001",
      date: "2025-02-15",
      amount: 50000,
      type: "Investment",
      status: "Completed",
    },
    {
      id: "TX1002",
      date: "2025-02-14",
      amount: -15000,
      type: "Withdrawal",
      status: "Pending",
    },
    {
      id: "TX1003",
      date: "2025-02-13",
      amount: 2500,
      type: "Dividend",
      status: "Completed",
    },
    {
      id: "TX1004",
      date: "2025-02-12",
      amount: 10000,
      type: "Investment",
      status: "Failed",
    },
    {
      id: "TX1005",
      date: "2025-02-11",
      amount: -2000,
      type: "Withdrawal",
      status: "Completed",
    },
    {
      id: "TX1006",
      date: "2025-02-10",
      amount: 7500,
      type: "Investment",
      status: "Completed",
    },
    {
      id: "TX1007",
      date: "2025-02-09",
      amount: 3000,
      type: "Investment",
      status: "Completed",
    },
    {
      id: "TX1008",
      date: "2025-02-08",
      amount: -5000,
      type: "Withdrawal",
      status: "Pending",
    },
    {
      id: "TX1009",
      date: "2025-02-07",
      amount: 15000,
      type: "Investment",
      status: "Completed",
    },
    {
      id: "TX1010",
      date: "2025-02-06",
      amount: 1000,
      type: "Dividend",
      status: "Completed",
    },
    {
      id: "TX1011",
      date: "2025-02-05",
      amount: 5000,
      type: "Investment",
      status: "Completed",
    },
    {
      id: "TX1012",
      date: "2025-02-04",
      amount: -10000,
      type: "Withdrawal",
      status: "Failed",
    },
    {
      id: "TX1013",
      date: "2025-02-03",
      amount: 2000,
      type: "Dividend",
      status: "Completed",
    },
    {
      id: "TX1014",
      date: "2025-02-02",
      amount: 7500,
      type: "Investment",
      status: "Completed",
    },
    {
      id: "TX1015",
      date: "2025-02-01",
      amount: 3000,
      type: "Investment",
      status: "Completed",
    },
  ];

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (!sortConfig) return 0;
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const paginatedTransactions = sortedTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const requestSort = (key: keyof Transaction) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getStatusBadge = (status: Transaction["status"]) => {
    const statusStyles = {
      Completed: "bg-green-100 text-green-800",
      Pending: "bg-yellow-100 text-yellow-800",
      Failed: "bg-red-100 text-red-800",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-sm ${statusStyles[status]}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Transaction History
        </h2>
        <div className="flex items-center space-x-2 text-gray-500">
          <FiInfo className="w-5 h-5" />
          <span className="text-sm">Last 30 days</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {["id", "date", "amount", "type", "status"].map((key) => (
                <th
                  key={key}
                  className="px-6 py-4 text-left text-sm font-medium text-gray-500 cursor-pointer hover:bg-gray-100"
                  onClick={() => requestSort(key as keyof Transaction)}
                >
                  <div className="flex items-center">
                    {key.charAt(0).toUpperCase() +
                      key.slice(1).replace(/([A-Z])/g, " $1")}
                    {sortConfig?.key === key &&
                      (sortConfig.direction === "asc" ? (
                        <FiArrowUp className="ml-2" />
                      ) : (
                        <FiArrowDown className="ml-2" />
                      ))}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedTransactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {transaction.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {transaction.date}
                </td>
                <td
                  className={`px-6 py-4 text-sm font-medium ${
                    transaction.amount > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  Ksh. {Math.abs(transaction.amount).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {transaction.type}
                </td>
                <td className="px-6 py-4 text-sm">
                  {getStatusBadge(transaction.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, transactions.length)} of{" "}
          {transactions.length} transactions
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm bg-white border rounded-md hover:bg-gray-50 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage * itemsPerPage >= transactions.length}
            className="px-4 py-2 text-sm bg-white border rounded-md hover:bg-gray-50 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
