import { Pagination } from "antd";
import { useState } from "react";
import data from "/src/data/tableData.json";
import User from "./User";
import { useTheme } from "../../ThemeContext";
import Icon from "./Icon";

const Table = () => {
  const [selectedRows, setSelectedRows] = useState({});
  const [isHeaderChecked, setIsHeaderChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { theme } = useTheme();
  const toggleRowSelection = (id) => {
    setSelectedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleHeaderSelection = () => {
    const allSelected = !isHeaderChecked;
    const newSelection = {};
    data.forEach((item) => {
      newSelection[item.id] = allSelected;
    });
    setSelectedRows(newSelection);
    setIsHeaderChecked(allSelected);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const isAllRowsSelected = () => {
    const startIdx = (currentPage - 1) * 10;
    const endIdx = currentPage * 10;
    const pageData = data.slice(startIdx, endIdx);
    return pageData.every((item) => selectedRows[item.id]);
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="min-w-full custom-table border-collapse text-text text-[12px] table-responsive">
          <thead className="border-b-[1px] border-bullet text-[12px] text-primary_text">
            <tr className="h-[40px]">
              <th className="px-3 py-2">
                <div className="flex items-center custom-checkbox">
                  <input
                    type="checkbox"
                    checked={isAllRowsSelected()}
                    onChange={toggleHeaderSelection}
                    style={{
                      accentColor: theme === "dark" ? "#c6c7f8" : "#1c1c1c",
                      borderColor: theme === "dark" ? "#ffffff33" : "#1c1c1c33",
                    }}
                  />
                </div>
              </th>
              <th className="px-3 py-2 font-normal text-left">Order ID</th>
              <th className="px-3 py-2 font-normal text-left">User</th>
              <th className="px-3 py-2 font-normal text-left">Project</th>
              <th className="px-3 py-2 font-normal text-left">Address</th>
              <th className="px-3 py-2 font-normal text-left">Date</th>
              <th className="px-3 py-2 font-normal text-left">Status</th>
              <th className="px-3 py-2 font-normal text-left invisible">
                .....
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .slice((currentPage - 1) * 10, currentPage * 10)
              .map((item, index) => (
                <tr
                  key={index}
                  className="group text-text hover:border-primary_light hover:bg-primary_light transition-all border-b-[1px] border-border_light h-[40px]"
                >
                  <td className="px-3 py-2 h-[40px] relative group-hover:rounded-l-md">
                    <div className="custom-checkbox checkbox-wrapper w-4 flex justify-center items-center">
                      <input
                        type="checkbox"
                        className={`${
                          selectedRows[item.id]
                            ? "visible"
                            : "invisible group-hover:visible"
                        }`}
                        checked={selectedRows[item.id] || false}
                        onChange={() => toggleRowSelection(item.id)}
                        style={{
                          accentColor: theme === "dark" ? "#c6c7f8" : "#1c1c1c",
                          borderColor:
                            theme === "dark" ? "#ffffff33" : "#1c1c1c33",
                        }}
                      />
                    </div>
                  </td>
                  <td className="px-3 py-2 h-[40px]">{item.id}</td>
                  <td className="px-3 py-2 h-[40px]">
                    <div className="flex items-center gap-2 h-full">
                      <User key={item.id} user={item} />
                    </div>
                  </td>
                  <td className="px-3 py-2 h-[40px]">{item.project}</td>
                  <td className="px-3 py-2 h-[40px]">
                    <div className="flex items-center gap-1 h-full">
                      <span>{item.address}</span>
                      <span className="group-hover:visible invisible">
                        <Icon
                          iconSrc="/assets/icons/notes.svg"
                          h="16px"
                          w="16px"
                        />
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2 h-[40px]">
                    <div className="flex gap-1 items-center">
                      <Icon
                        iconSrc="/assets/icons/calendar.svg"
                        h="16px"
                        w="16px"
                      />
                      {item.date}
                    </div>
                  </td>
                  <td className="px-3 py-2 h-[40px] opacity-70">
                    <div
                      className="flex items-center gap-1 h-full"
                      style={{ color: item.statusColor }}
                    >
                      <span className="text-sm flex items-center">•</span>
                      <span className="text-[12px]">{item.status}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2 h-[40px] text-right group relative group-hover:rounded-r-md">
                    <div className="hidden group-hover:flex justify-center items-center h-full w-full hover:bg-[#eaecee] dark:hover:bg-[#404040] rounded m-auto">
                      <Icon
                        iconSrc="/assets/icons/dotsThree.svg"
                        h="16px"
                        w="16px"
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>

          {/* <tbody>
            {data
              .slice((currentPage - 1) * 10, currentPage * 10)
              .map((item, index) => (
                <tr
                  key={index}
                  className="text-text hover:bg-primary_light hover:border-primary_light transition-all group border-b-[1px] border-border_primary h-[40px]"
                >
                  <td className="px-3 py-2 h-[40px] relative">
                    <div className="checkbox-wrapper w-4 flex justify-center items-center">
                      <input
                        type="checkbox"
                        className={`custom-checkbox ${
                          selectedRows[item.id]
                            ? "visible"
                            : "invisible group-hover:visible"
                        }`}
                        checked={selectedRows[item.id] || false}
                        onChange={() => toggleRowSelection(item.id)}
                        style={{
                          accentColor: theme === "dark" ? "#c6c7f8" : "#1c1c1c",
                        }}
                      />
                    </div>
                  </td>
                  <td className="px-3 py-2 h-[40px]">{item.id}</td>
                  <td className="px-3 py-2 h-[40px]">
                    <div className="flex items-center gap-2 h-full">
                      <User key={item.id} user={item} />
                    </div>
                  </td>
                  <td className="px-3 py-2 h-[40px]">{item.project}</td>
                  <td className="px-3 py-2 h-[40px]">
                    <div className="flex items-center gap-1 h-full">
                      <span>{item.address}</span>
                      <span className="group-hover:visible invisible">
                        <Icon
                          iconSrc="src/assets/icons/notes.svg"
                          h="16px"
                          w="16px"
                        />
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2 h-[40px]">
                    <div className="flex gap-1 items-center">
                      <Icon
                        iconSrc="src/assets/icons/calendar.svg"
                        h="16px"
                        w="16px"
                      />
                      {item.date}
                    </div>
                  </td>
                  <td className="px-3 py-2 h-[40px] opacity-70">
                    <div
                      className="flex items-center gap-1 h-full"
                      style={{ color: item.statusColor }}
                    >
                      <span className="text-sm flex items-center">•</span>
                      <span className="text-[12px]">{item.status}</span>
                    </div>
                  </td>

                  <td className="px-3 py-2 h-[40px] text-right group relative">
                    <div className="hidden group-hover:flex justify-center items-center h-full w-full hover:bg-[#eaecee] dark:hover:bg-[#404040] rounded m-auto">
                      <Icon
                        iconSrc="src/assets/icons/dotsThree.svg"
                        h="16px"
                        w="16px"
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody> */}
        </table>
      </div>
      <div className="flex justify-end mt-[12px]">
        {/* Ant Design Pagination */}
        <Pagination
          defaultCurrent={1}
          current={currentPage}
          total={data.length}
          onChange={handlePageChange}
          pageSize={10}
        />
      </div>
    </div>
  );
};

export default Table;
