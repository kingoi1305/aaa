import styled from "styled-components";
import { PrimaryButton } from "../button/PrimaryButton";
import { Input } from "../input/input";

export const SearchInput = () => {
  return (
    <div>
      <SContainer>
        <Input placeholder="search" />
        <SButtonWrapper>
          <PrimaryButton>search</PrimaryButton>
        </SButtonWrapper>
      </SContainer>
    </div>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
