import MainWrapper from '../../components/wrappers/MainWrapper'
import Menu from '../../components/menu/Menu'
import Header from '../../components/header/Header'
import Manifest from '../../components/sections/Manifest'
import Courses from '../../components/sections/Courses'
import Custom from '../../components/sections/Custom'
import Featured from '../../components/sections/Featured'
import Facts from '../../components/sections/Facts'
import Calendar from '../../components/sections/Calendar'
import Companies from '../../components/sections/Companies'
import Faqs from '../../components/sections/Faqs'
import Find from '../../components/sections/Find'
import Footer from '../../components/footer/Footer'
import useTranslations from '../../../hooks/useTranslations'
import useMenu from 'app/useMenu'

const Home = ({
  isBlack,
  isFluor,
  isLock,
  courses,
  dates,
  logos,
  faqsList,
  onContactFormSubmit,
  contactFormParams,
}) => {
  const t = useTranslations()
  const {
    areCoursesOpen,
    course,
    handleClose,
    handleContactOpen,
    openCourses,
    isContactOpen,
    isCourseOpen,
    openCourse,
  } = useMenu()

  return (
    <MainWrapper isBlack={isBlack} isFluor={isFluor} isLock={isLock}>
      <Menu
        type="home"
        contactFormParams={contactFormParams}
        isBlack={isBlack}
        courses={courses}
        areCoursesOpen={areCoursesOpen}
        course={course}
        handleClose={handleClose}
        handleContactOpen={handleContactOpen}
        openCourses={openCourses}
        isContactOpen={isContactOpen}
        isCourseOpen={isCourseOpen}
        openCourse={openCourse}
      />
      <div className="blurableWrapper">
        <Header title={t('manifest:header')} number={1} />
        <Manifest isBlack={isBlack} isFluor={isFluor} />
        <Header isClose title={t('manifest:header')} />
        <Header title={t('courses:header')} number={2} />
        <Courses
          courses={courses}
          isBlack={isBlack}
          isFluor={isFluor}
          openCourse={openCourse}
          openContact={handleContactOpen}
        />
        <Header isClose title={t('courses:header')} />
        <Header title={t('custom:header')} number={3} />
        <Custom isBlack={isBlack} isFluor={isFluor} openCourses={openCourses} />
        <Header isClose title={t('custom:header')} />
        <Header title={t('featured:header')} number={4} />
        <Featured isBlack={isBlack} isFluor={isFluor} />
        <Header isClose title={t('featured:header')} />
        <Header title={t('facts:header')} number={5} />
        <Facts isBlack={isBlack} isFluor={isFluor} />
        <Header isClose title={t('facts:header')} />
        <Header title={t('calendar:header')} number={6} />
        <Calendar dates={dates} isBlack={isBlack} isFluor={isFluor} />
        <Header isClose title={t('calendar:header')} />
        <Header title={t('companies:header')} number={7} />
        <Companies
          logos={logos}
          isBlack={isBlack}
          isFluor={isFluor}
          openContact={handleContactOpen}
        />
        <Header isClose title={t('companies:header')} />
        <Header title={t('faqs:header')} number={8} />
        <Faqs isBlack={isBlack} isFluor={isFluor} list={faqsList} />
        <Header isClose title={t('faqs:header')} />
        <Header title={t('find:header')} number={9} />
        <Find isBlack={isBlack} isFluor={isFluor} />
        <Header isClose title={t('find:header')} />
        <Header title={t('footer:header')} number={10} />
        <Footer
          courses={courses}
          isBlack={isBlack}
          isFluor={isFluor}
          onContactFormSubmit={onContactFormSubmit}
          contactFormParams={contactFormParams}
          openCourse={openCourse}
        />
        <Header isClose title={t('footer:header')} />
      </div>
    </MainWrapper>
  )
}

Home.propTypes = {}

export default Home
