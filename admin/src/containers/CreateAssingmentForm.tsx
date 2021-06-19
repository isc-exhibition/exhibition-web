import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { gql, useMutation } from '@apollo/client';
import { COLORS } from 'utils/theme';
import { Heading01 } from 'components/Heading/Heading01';
import { Heading04 } from 'components/Heading/Heading04';
import { css } from '@emotion/react';
import Button from 'components/Button/Button';
import RHFInput from 'components/Form/RHFINput';
import RHFTextarea from 'components/Form/RHFTextarea';
import ImageDropzone from 'containers/ImageDropzone';
import { ImageFile, NFTInfoToSave } from 'utils/types';
// import { useAppSelector } from 'hooks/store';
// import { selectWallet } from 'store/slices/web3';
// import { localstorageNameForNFT } from 'constants/storage';
// import { notify } from '../utils/notifications';

const Container = styled.div`
  padding: 32px 80px;
  background-color: ${COLORS.lightGray};
  height: 100%;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 24px 40px;
  border-radius: 24px;
  background: white;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
`;

const GrayHeading04 = styled(Heading04)`
  color: ${COLORS.gray}
`;

const StyledInput = styled(RHFInput)`
  width: 446px;
  height: 58px;
  padding: 19px;
  box-sizing: border-box;
  border: 1px solid ${COLORS.lightGray};
  margin: 8px 0 12px 0;
  font-size: 16px;
  line-height: 29px;

  &:focus {
    outline-color: ${COLORS.orange};
  }
`;

const StyledTextarea = styled(RHFTextarea)`
  width: 446px;
  height: 124px;
  padding: 19px;
  box-sizing: border-box;
  margin: 16px 0 24px 0;
  border: 1px solid ${COLORS.lightGray};
  font-size: 16px;
  line-height: 29px;
  resize: none;

  &:focus {
    outline-color: ${COLORS.orange};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const CREATE_ASSIGNMENT = gql`
  mutation ($name: String! $team: String! $description: String! $concept: String! $link: String! $image_link: String! $subject_id: Int! ) {
    createAssignment(createAssignmentInput: {
      name: $name,
      team: $team,
      description: $description,
      concept: $concept,
      link: $link,
      image_link: $image_link,
      subject_id: $subject_id,
    }) {
      name
    }
  }
`;

interface Props {
  handleCancel?: () => void;
  handleCreateNFT?: (nftInfo: NFTInfoToSave) => void;
}

type CreateAssignmentInput = {
  name: string;
  team: string;
  description: string;
  concept: string;
  link: string;
  image_link: string;
  subject_id: number;
}

export default function CreateAssingmentForm({ handleCancel, handleCreateNFT }: Props) {
  const [uploadedImage, setUploadedImage] = useState<ImageFile[]>([]);

  const [sendMutaion, { data, error, loading }] = useMutation<any>(
    CREATE_ASSIGNMENT,
  );

  // const wallet = useAppSelector(selectWallet);

  const handleImageUpload = (images: ImageFile[]) => {
    setUploadedImage(images);
  };

  const {
    register, handleSubmit, formState,
  } = useForm();
  const { isSubmitting } = formState;

  const onSubmit = async (submitData: CreateAssignmentInput) => {
    const {
      name, team, description, concept, link, image_link, subject_id,
    } = submitData;
    try {
      console.log(await sendMutaion({
        variables: {
          name, team, description, concept, link, image_link, subject_id: Number(subject_id),
        },
      }));
    } catch (err) {
      console.error(err);
      alert('문제가 생겼습니다. 뭔가 수정후 다시 해주세요!');
    }
    // if (uploadedImage.length) {
    //   if (wallet?.publicKey) {
    //     const pubKey = wallet.publicKey.toBase58();

    //     const NFTToSave: NFTInfoToSave = {
    //       file: uploadedImage[0].imageData,
    //       name: data.name,
    //       creator: pubKey,
    //       description: data.description,
    //     };

    //     try {
    //       localStorage.setItem(localstorageNameForNFT, JSON.stringify(NFTToSave));
    //       notify('New NFT Saved !', { backgroundColor: COLORS.green01 });
    //       handleCreateNFT(NFTToSave);
    //       handleCancel();
    //     } catch (e) {
    //       console.error(e);
    //       notify('Error. Please check upload image');
    //     }
    //   } else {
    //     notify('You need connect wallet');
    //   }
    // } else {
    //   notify('Please upload image to save NFT');
    // }
  };

  return (
    <Container>
      <Heading01 css={css`margin-bottom: 24px`}>
        새로운 과제 등록하기
      </Heading01>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <Column css={css`margin-right: 44px`}>
            <GrayHeading04>
              과목 번호 (각 과목에 할당된 숫자를 입력해주세요)
            </GrayHeading04>
            <StyledInput type="text" register={register} required name="subject_id" />
            {/* <GrayHeading04>
              학기
            </GrayHeading04>
            <StyledInput type="text" register={register} required name="image_link" /> */}
            <GrayHeading04>
              Image
            </GrayHeading04>
            <ImageDropzone
              handleImageUpload={handleImageUpload}
              uploadedImage={uploadedImage}
              register={register}
              required
              name="image"
            />
            <GrayHeading04>
              과제 링크
            </GrayHeading04>
            <StyledInput type="text" register={register} required name="link" />
          </Column>
          <Column>
            <GrayHeading04>
              과제 이름
            </GrayHeading04>
            <StyledInput type="text" register={register} required name="name" />
            <GrayHeading04>
              팀 이름
            </GrayHeading04>
            <StyledInput type="text" register={register} required name="team" />
            <GrayHeading04>
              컨셉
            </GrayHeading04>
            <StyledInput type="text" register={register} required name="concept" />
            <GrayHeading04>
              설명
            </GrayHeading04>
            <StyledTextarea register={register} required name="description" />
            <ButtonContainer>
              <Button orangeColor type="submit" disabled={isSubmitting} css={css`height: 40px; font-size: 21px; line-height: 32px;`}>
                등록하기
              </Button>
              {handleCancel
            && (
            <Button
              orangeColor
              type="button"
              onClick={handleCancel}
              css={css`
                background: white; 
                color: ${COLORS.orange}; 
                border: 1px solid ${COLORS.orange}; 
                margin-left: 32px;
                `}
            >
              Cancel
            </Button>
            )}
            </ButtonContainer>
          </Column>
        </FormContainer>
      </form>
    </Container>
  );
}
