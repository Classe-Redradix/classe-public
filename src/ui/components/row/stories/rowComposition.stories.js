import MainWrapper from '../../wrappers/MainWrapper'
import SectionWrapper from '../../wrappers/SectionWrapper'
import Row from '../Row'
import Cell from '../../cell/Cell'

export default {
  title: 'Layout/Row',
  component: Row,
  argTypes: null,
}

export const rowComposition = () => (
  <MainWrapper>
    <SectionWrapper>
      <Row type="full">
        <Cell>
          <p className="h1">Demo cell with h1</p>
        </Cell>
      </Row>
      <Row type="half">
        <Cell>
          <p className="h2">Demo cell with h2</p>
        </Cell>
        <Cell>
          <p className="h3">Demo cell with h3</p>
        </Cell>
      </Row>
      <Row type="third">
        <Cell>
          <p className="h4">Demo cell with h4</p>
        </Cell>
        <Cell>
          <p className="h5">Demo cell with h5</p>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
            semper ultricies et quis nibh imperdiet lorem fermentum, tempor.
            Ultrices mauris diam sapien est.
          </p>
        </Cell>
      </Row>
      <Row type="quarter">
        <Cell>
          <p className="notes">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
            semper ultricies et quis nibh imperdiet lorem fermentum, tempor.
            Ultrices mauris diam sapien est.
          </p>
        </Cell>
        <Cell>
          <p className="tiny">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
            semper ultricies et quis nibh imperdiet lorem fermentum, tempor.
            Ultrices mauris diam sapien est. Diam sit lorem dolor sed sit ac.
            Sollicitudin donec purus pretium nam ornare in ut. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Lacus semper ultricies et
            quis nibh imperdiet lorem fermentum, tempor. Ultrices mauris diam
            sapien est. Diam sit lorem dolor sed sit ac. Sollicitudin donec
            purus pretium nam ornare in ut.
          </p>
        </Cell>
      </Row>
    </SectionWrapper>
  </MainWrapper>
)
