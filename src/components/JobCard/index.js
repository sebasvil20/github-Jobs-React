import {
  CardContainer,
  Image,
  Company,
  Title,
  Badge,
  TextContainer,
  LabelContainer,
  WorldIcon,
  TimeIcon,
  Label,
} from './styles'

const DEFAULT_IMG =
  'https://images.unsplash.com/photo-1585842630354-c6766ebf210d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'

export const JobCard = ({
  img = DEFAULT_IMG,
  title = 'Job Title',
  company = 'Company name',
  badge = 'Badge text',
  time = '5',
  location = 'New York'
}) => {


  return (
    <CardContainer>
      <Image src={img} />
      <TextContainer>
        <Company>{company}</Company>
        <Title>{title}</Title>
        <Badge>{badge}</Badge>
      </TextContainer>
      <LabelContainer>
        <Label>
          <WorldIcon size={20} />
          {location}
        </Label>
        <Label>
          <TimeIcon size={20} />
          {time}
        </Label>
      </LabelContainer>
    </CardContainer>
  )
}
