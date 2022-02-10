import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import Fact from '../facts/Fact'

const Facts = ({ isBlack }) => {
  const t = useTranslations()

  // useEffect(() => {
  //   const body = document.getElementsByTagName('body')[0]
  // }, [])

  const twisterMath = (x, y, xShapeCenter, yShapeCenter) => {
    return Math.atan2(x - xShapeCenter, -(y - yShapeCenter)) * (180 / Math.PI)
  }

  const getPos = (el, pos) => {
    for (
      var lx = 0, ly = 0;
      el != null;
      lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent
    );
    if (pos === 'x') {
      return lx
    } else {
      return ly
    }
  }

  const cursorFinderEvent = e => {
    const x = e.clientX
    const y = e.clientY
    // const coor = 'Coordinates: (' + x + ',' + y + ')'

    const theArrows = document.getElementsByClassName('fact-arrow')
    for (var i = 0; i < theArrows.length; i++) {
      var xShapeCenter = getPos(theArrows[i], 'x')
      var yShapeCenter = getPos(theArrows[i], 'y')
      theArrows[i].style.transform =
        'rotate(' + twisterMath(x, y, xShapeCenter, yShapeCenter) + 'deg)'
    }
  }

  return (
    <SectionWrapper isBlack={isBlack} extraClass="facts">
      <div onMouseMove={cursorFinderEvent}>
        <Row type="full">
          <Cell>
            <div className="scrambleTextWrapper">
              <h3 className="h1 scrambleText">
                {t('facts:title', {
                  line: text => <span className="line">{text}</span>,
                  lineTab: text => <span className="line has-tab">{text}</span>,
                })}
              </h3>
            </div>
          </Cell>
        </Row>
        <Row type="half">
          <Cell>
            <Fact text={t('facts:fact1')} />
          </Cell>
          <Cell>
            <Fact text={t('facts:fact2')} />
          </Cell>
        </Row>
        <Row type="half">
          <Cell>
            <Fact text={t('facts:fact3')} />
          </Cell>
          <Cell>
            <Fact text={t('facts:fact4')} />
          </Cell>
        </Row>
        <Row type="half">
          <Cell>
            <Fact text={t('facts:fact5')} />
          </Cell>
          <Cell>
            <Fact text={t('facts:fact6')} />
          </Cell>
        </Row>
      </div>
    </SectionWrapper>
  )
}

Facts.propTypes = {
  isBlack: PropTypes.bool.isRequired,
  isFluor: PropTypes.bool.isRequired,
}

export default Facts
