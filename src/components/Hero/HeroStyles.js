import styled from 'styled-components';

export const Img = styled.img`
  width:20%;
  height:20%;
  object-fit: cover;
  overflow: hidden;
  position: "absolute"; //Here is the trick
  bottom: 0;
  alignSelf: "flex-end";
`

export const ImgContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: right;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
// export const RightSection = styled.div`
//   width: 100%;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     width: 80%;
//     display: flex;
//     flex-direction: column;

//     margin: 0 auto;
//   }
//   @media ${(props) => props.theme.breakpoints.md} {
//     width: 100%;
//     display: flex;
//     flex-direction: column;

//     margin: 0 auto;
//   }
// `
export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
