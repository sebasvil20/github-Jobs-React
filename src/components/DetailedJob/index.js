import {
  JobTitle,
  CompanyName,
  Badge,
  Content,
  TitleContainer,
  DetailContainer,
  WorldIcon,
  TimeIcon,
  Label,
  Minicard,
  LogoImage,
  TextContainer,
  MayorContainer,
  ApplyContainer,
  ApplyText,
  ApplyTitle,
  BackHome
} from './styles'

export const DetailedJob = ({
  jobId,
  jobType,
  company,
  companyUrl,
  jobLocation,
  jobTitle,
  jobDescription,
  jobTime,
  howToApply,
  companyImage,
}) => {
  return (
    <MayorContainer>
      <ApplyContainer>
        <BackHome to="/">Back to search</BackHome>
        <ApplyTitle>LOCATION</ApplyTitle>
        <ApplyText>
          {howToApply}
        </ApplyText>
      </ApplyContainer>
      <DetailContainer>
        <TitleContainer>
          <JobTitle>{jobTitle}</JobTitle>
          <Badge> {jobType} </Badge>
        </TitleContainer>

        <Label>
          <TimeIcon size={20} />
          {jobTime}
        </Label>

        <Minicard>
          <LogoImage src={companyImage} />
          <TextContainer>
            <CompanyName>{company}</CompanyName>
            <Label>
              <WorldIcon size={20} />
              {jobLocation}
            </Label>
          </TextContainer>
        </Minicard>
        <Content dangerouslySetInnerHTML={{ __html: jobDescription }} />
      </DetailContainer>
    </MayorContainer>
  )
}
