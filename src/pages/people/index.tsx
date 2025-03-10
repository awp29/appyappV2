import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Pagination } from "@heroui/pagination";
import { Checkbox } from "@heroui/checkbox";
import { Person } from "./types";
import { Tooltip } from "@heroui/tooltip";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { format } from "date-fns";
import { mockPeople } from "./mockData";
import { Input } from "@heroui/input";
import { EditIcon, SearchIcon, TrashIcon } from "@/components/icons";
import React from "react";
import PageHeader from "@/components/page/pageHeader";
import { useNavigate } from "react-router-dom";

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.display({
    id: "select-col",
    size: 48,
    enableResizing: false,
    header: ({ table }) => (
      <div className="flex items-center">
        <Checkbox
          onChange={table.getToggleAllRowsSelectedHandler()}
          checked={table.getIsAllRowsSelected()}
          isSelected={table.getIsAllRowsSelected()}
          size="sm"
        />
      </div>
    ),

    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <Checkbox
            onChange={row.getToggleSelectedHandler()}
            checked={row.getIsSelected()}
            isSelected={row.getIsSelected()}
            size="sm"
          />
        </div>
      );
    },
  }),
  columnHelper.accessor((row) => `${row.details.name},${row.details.email}`, {
    id: "details",
    header: () => <span className="text-left">Employee</span>,
    cell: (info) => {
      // AP-TODO: Don't know how I feel about this. Is this the best way?
      const details = info.getValue().split(",");

      return (
        <div className="flex flex-col">
          <span>{details[0]}</span>
          <span className="text-tiny text-default-500">{details[1]}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor("role", {
    size: 256,
    enableResizing: false,
    header: () => <span>Role</span>,
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor("team", {
    size: 160,
    enableResizing: false,
    header: () => <span>Team</span>,
    cell: (info) => {
      return <span>{info.getValue()}</span>;
    },
  }),
  columnHelper.accessor("dateJoined", {
    size: 160,
    enableResizing: false,
    header: () => <span>Joined</span>,
    cell: (info) => {
      const dateJoined = info.getValue();
      const formatedDate = format(new Date(dateJoined), "MMM dd, yyyy");

      return <span>{formatedDate}</span>;
    },
  }),
  columnHelper.display({
    id: "actions-col",
    size: 128,
    enableResizing: false,
    header: () => <span className="block text-right pr-2">Actions</span>,
    cell: () => {
      const navigate = useNavigate();

      return (
        <span className="flex justify-end">
          <Tooltip
            size="lg"
            showArrow
            closeDelay={0}
            content="Edit"
            color="foreground"
          >
            <Button
              isIconOnly
              variant="light"
              onPress={() => {
                navigate("/people/edit");
              }}
            >
              <EditIcon
                className="stroke-current text-default-800"
                width={16}
                height={16}
              />
            </Button>
          </Tooltip>
          <Tooltip
            size="lg"
            showArrow
            closeDelay={0}
            content="Delete"
            color="foreground"
          >
            <Button isIconOnly variant="light">
              <TrashIcon
                className="stroke-current text-default-800"
                width={16}
                height={16}
              />
            </Button>
          </Tooltip>
        </span>
      );
    },
  }),
];

export default function PeoplePage() {
  const navigate = useNavigate();

  const [globalFilter, setGlobalFilter] = React.useState("");
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    enableRowSelection: true,
    columns,
    data: mockPeople,
    state: {
      pagination,
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
  });

  const selectedRows = table.getSelectedRowModel().rows;
  const numberOfSelectedRows = selectedRows.length;
  const haveSelectedRows = numberOfSelectedRows > 0;

  const firstRowIndex = pagination.pageIndex * pagination.pageSize + 1;
  const lastRowIndex = Math.min(
    firstRowIndex + pagination.pageSize - 1,
    table.getRowCount()
  );
  const totalPages = Math.ceil(table.getRowCount() / pagination.pageSize);

  return (
    <DefaultLayout>
      <PageHeader>
        <div className="flex justify-between items-center">
          <div>
            <PageHeader.Title>People</PageHeader.Title>
            <PageHeader.Description>
              Check out your people, have a spy etc
            </PageHeader.Description>
          </div>

          <Button
            color="primary"
            size="md"
            onPress={() => navigate("/people/add")}
          >
            Add member
          </Button>
        </div>
      </PageHeader>

      <div className="mb-6 flex justify-between items-center">
        <Input
          size="sm"
          className="max-w-72"
          placeholder="Type to search"
          isClearable
          onValueChange={(value) => {
            // AP-TODO: Needs to be denounced
            setGlobalFilter(value);
          }}
          startContent={
            <SearchIcon className="stroke-current text-default-400" />
          }
        />

        {haveSelectedRows && (
          <div className="flex gap-2 items-center">
            <p className="text-tiny text-default-500">
              {numberOfSelectedRows} items selected
            </p>

            <Button
              size="sm"
              variant="light"
              onPress={() => table.toggleAllRowsSelected(false)}
            >
              Cancel
            </Button>

            <Button size="sm" variant="solid">
              Delete
            </Button>
          </div>
        )}
      </div>

      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="h-10 bg-default-100 [&>:first-child]:rounded-l-lg [&>:last-child]:rounded-r-lg"
            >
              {headerGroup.headers.map((header) => {
                // AP-TODO: Don't like this code, need to refactor
                const width =
                  header.index === 1 ? "auto" : `${header.getSize()}px`;

                return (
                  <th
                    key={header.id}
                    style={{
                      width,
                    }}
                    className="text-left px-3 text-sm font-semibold text-default-500"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="h-[60px]">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="text-sm text-default-900 px-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 flex justify-between items-center">
        <Pagination
          size="sm"
          showControls
          initialPage={pagination.pageIndex + 1}
          total={totalPages}
          onChange={(page) => {
            table.setPageIndex(page - 1);
          }}
        />

        <p className="text-tiny text-default-500">
          Showing {firstRowIndex} - {lastRowIndex} of {table.getRowCount()}
        </p>
      </div>
    </DefaultLayout>
  );
}
