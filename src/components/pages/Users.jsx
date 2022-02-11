import styled from "styled-components";
import { SearchInput } from "../atoms/molecules/Searchinput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `name${val}`,
    image: "https://source.unsplash.com/75715CVEJhI",
    email: "111info222.com",
    phone: "000-1111-2222",
    company: {
      name: "company"
    },
    website: "https://gogole.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>User page</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
