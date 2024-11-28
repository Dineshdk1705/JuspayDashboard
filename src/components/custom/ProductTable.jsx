/* eslint-disable react/prop-types */

const TableCell = ({ children }) => (
  <td className="py-3 px-4 h-[40px] whitespace-nowrap">{children}</td>
);

const ProductTable = ({ data }) => {
  return (
    <div className="bg-primary p-6 rounded-2xl min-h-[336px]">
      <h3 className="p-2 text-sm font-semibold text-text leading-5">
        Top Selling Products
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-primary_text text-xs border-b border-border_primary">
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Amount</TableCell>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index} className="text-text text-xs">
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.amount}</TableCell>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
