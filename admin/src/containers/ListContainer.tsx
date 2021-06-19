/* eslint-disable no-underscore-dangle */
import React from 'react';
import styled from '@emotion/styled';
import { gql, useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { COLORS } from '../utils/theme';
import AssignmentRow from '../components/AssignmentRow/AssignmentRow';

export interface AssignmentListInterface {
  _id: string;
  name: string;
  team: string;
}

interface AssignmentListData {
  assignmentList: AssignmentListInterface[];
}

const ASSIGNMENT_LIST = gql`
  query {
    assignmentList {
      _id
      name
      team
    }
  }
`;

const Container = styled.div`
  width: 100vw;
  box-sizing: border-box;
  height: 100%;
  padding: 30px 50px;
  background-color: ${COLORS.lightGray};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

const AssignmentListContainer = styled.div`
  width: 75vw;
  background-color: white;
  border-radius: 15px;
  margin: 15px 0;
`;

const P = styled.p`
  margin: 0;
  font-size: 24px;
  color: black;
  line-height: 1.7;
`;

const anchorStyle = css`
  text-decoration: none;
`;

function ListContainer() {
  const { data, error, loading } = useQuery<AssignmentListData>(
    ASSIGNMENT_LIST,
  );

  return (
    <Container>
      <Heading>과제 목록</Heading>
      <AssignmentListContainer>
        {(!loading && !error) && data?.assignmentList.map((assignment, index) => (
          <AssignmentRow index={index}>
            <Link to={`/assignment/${assignment._id}`} css={css`${anchorStyle}`}>
              <P css={css`font-weight: bold;`}>
                {assignment.name}
              </P>
              <P>
                {assignment.team}
              </P>
            </Link>
          </AssignmentRow>
        ))}
      </AssignmentListContainer>
    </Container>
  );
}

export default ListContainer;
