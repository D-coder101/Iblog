"use client";
import { createContext, useContext } from "react";

interface TableContextType {
  columns: string;
}

interface TableProps {
  columns: string;
  children: React.ReactNode;
}

interface Props {
  children: React.ReactNode;
}

const TableContext = createContext<TableContextType | null>(null);

function Table({ columns, children }: TableProps) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        role="table"
        className="border border-gray-200 text-sm bg-white rounded-lg overflow-hidden"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }: Props) {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error("Header must be used within a Table");
  }

  return (
    <div
      role="row"
      className={`grid text-sm gap-x-6 items-center px-4 py-3 bg-gray-100 border-b border-gray-300 uppercase tracking-wider font-bold text-gray-600`}
      style={{ gridTemplateColumns: context.columns }}
    >
      {children}
    </div>
  );
}

function Row({ children }: Props) {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error("Row must be used within a Table");
  }

  return (
    <div
      role="row"
      className={`grid gap-x-6 min-w-full items-center px-4 py-3 border-b border-gray-300 last:border-none`}
      style={{ gridTemplateColumns: context.columns }}
    >
      {children}
    </div>
  );
}

interface BodyProps<T> {
  data: T[];
  render: (item: T) => React.ReactNode;
  query: string;
}

function Body<T>({ data, render, query }: BodyProps<T>) {
  if (!data.length)
    return (
      <p className="text-center font-medium my-6">
        No results available for &quot;{query}&quot;
      </p>
    );

  return <section>{data.map(render)}</section>;
}

// interface FooterProps {
//     children?: ReactNode;
//   };

//   function Footer({ children }: FooterProps) {
//     return children ? (
//       <footer className="bg-gray-100 flex justify-center py-3">{children}</footer>
//     ) : null;
//   }

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
// Table.Footer = Footer;

export default Table;
