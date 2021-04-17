import {
  JobTitle,
  CompanyName,
  Location,
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
  companyImage,
}) => {
  return (
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
  )
}
