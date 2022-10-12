import React, { useState } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";

const Users = ({ users, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const userCrop = paginate(users, currentPage, pageSize);

  return (
    <>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встреч</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {userCrop.map((user) => (
              <User key={user._id} {...rest} {...user} />
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        itemsCount={users.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Users;
