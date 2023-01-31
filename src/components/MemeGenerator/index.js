import {Component} from 'react'
import {
  BackgroundContainer,
  Wrapper,
  Container,
  Heading,
  Form,
  InputArea,
  InputText,
  Label,
  Select,
  Option,
  Button,
  ImgContainer,
  TopText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: 16,
    isSubmitted: false,
  }

  onChangeImageUrl = e => {
    this.setState({imageUrl: e.target.value})
  }

  onChangeTopText = e => {
    this.setState({topText: e.target.value})
  }

  onChangeBottomText = e => {
    this.setState({bottomText: e.target.value})
  }

  onChangeFontSize = e => {
    this.setState({fontSize: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault()
    this.setState({isSubmitted: true})
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, isSubmitted} = this.state
    return (
      <BackgroundContainer>
        <Wrapper>
          <Container>
            <Heading>Meme Generator</Heading>
            <Form onSubmit={this.onSubmit}>
              <InputArea>
                <Label htmlFor="Image URL">Image URL</Label>
                <InputText
                  placeholder="Enter the Image URL"
                  onChange={this.onChangeImageUrl}
                  value={imageUrl}
                  id="Image URL"
                />
              </InputArea>
              <InputArea>
                <Label htmlFor="Top Text">Top Text</Label>
                <InputText
                  placeholder="Enter the Top Text"
                  onChange={this.onChangeTopText}
                  value={topText}
                  id="Top Text"
                />
              </InputArea>
              <InputArea>
                <Label htmlFor="Bottom Text">Bottom Text</Label>
                <InputText
                  placeholder="Enter the Bottom Text"
                  onChange={this.onChangeBottomText}
                  value={bottomText}
                  id="Bottom Text"
                />
              </InputArea>
              <InputArea>
                <Label htmlFor="Font Size">Font Size</Label>
                <Select onChange={this.onChangeFontSize} id="Font Size">
                  {fontSizesOptionsList.map(item => (
                    <Option key={item.optionId} value={item.optionId}>
                      {item.displayText}
                    </Option>
                  ))}
                </Select>
              </InputArea>
              <Button>Generate</Button>
            </Form>
          </Container>
          <Container>
            {isSubmitted ? (
              <ImgContainer imageUrl={imageUrl} data-testid="meme">
                <TopText fontSize={fontSize}>{topText}</TopText>
                <TopText fontSize={fontSize}>{bottomText}</TopText>
              </ImgContainer>
            ) : null}
          </Container>
        </Wrapper>
      </BackgroundContainer>
    )
  }
}

export default MemeGenerator
