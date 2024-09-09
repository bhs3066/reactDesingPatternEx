import React, { useEffect, useState } from "react";
import Present from "../first/Present";

const Container = () => {
  const [users, setUsers] = useState([]); // 상태 관리

  useEffect(() => {
    // 데이터를 가져오는 로직, 동작등은 Container Component에서만 처리
    const fetchUsers = async () => {
      const mockData = [
        { id: 1, name: "리액트 디자인 패턴" },
        { id: 2, name: "1. Presentational and Container Pattern" },
        { id: 3, name: "2. HOC" },
        { id: 4, name: "3. Render Props" },
        { id: 5, name: "4. Custom Hook" },
      ];
      setUsers(mockData);
    };

    fetchUsers();
  }, []);

  return <Present users={users}></Present>;
};

export default Container;
