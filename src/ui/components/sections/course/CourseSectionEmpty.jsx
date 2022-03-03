import PropTypes from 'prop-types'
import SectionWrapper from '../../wrappers/SectionWrapper'
import Row from '../../row/Row'
import Cell from '../../cell/Cell'

const CourseSectionEmpty = ({ width = 342 }) => {
  return (
    <SectionWrapper isBlack extraClass="courseSection courseSection--empty">
      <div
        className="courseSection-content"
        style={{
          width: width + 'px',
        }}
      >
        <Row type="full" extraClass="courseSection-number">
          <Cell isNegative />
        </Row>
        <Row type="full" extraClass="courseSection-title">
          <Cell isNegative />
        </Row>
      </div>
    </SectionWrapper>
  )
}

CourseSectionEmpty.propTypes = {
  width: PropTypes.number,
}

export default CourseSectionEmpty
