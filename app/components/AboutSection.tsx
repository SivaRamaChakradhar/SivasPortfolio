'use client'

import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion'
import {
  FaLaptopCode,
  FaBrain,
  FaInfinity,
  FaUser,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaEnvelope,
  FaChessKnight,
  FaFilm,
  FaMusic,
} from 'react-icons/fa'
import {
  SiCodeforces,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
} from 'react-icons/si'
import {GiCricketBat} from 'react-icons/gi'

const learningItems = [
  {name: 'React', icon: <SiReact />},
  {name: 'Node.js', icon: <SiNodedotjs />},
  {name: 'MongoDB', icon: <SiMongodb />},
  {name: 'JavaScript', icon: <SiJavascript />},
]

const fadeUp: Variants = {
  hidden: {opacity: 0, y: 35},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.7, ease: 'easeOut'},
  },
}

const fadeRight: Variants = {
  hidden: {opacity: 0, x: -45},
  visible: {
    opacity: 1,
    x: 0,
    transition: {duration: 0.8, ease: 'easeOut'},
  },
}

const fadeLeft: Variants = {
  hidden: {opacity: 0, x: 45},
  visible: {
    opacity: 1,
    x: 0,
    transition: {duration: 0.8, ease: 'easeOut'},
  },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const doingItems = [
  {title: 'Building', text: 'Web Apps', icon: <FaLaptopCode />, className: 'icon-web'},
  {title: 'Exploring', text: 'AI / ML', icon: <FaBrain />, className: 'icon-ai'},
  {title: 'Learning', text: 'Next.js', icon: <FaInfinity />, className: 'icon-devops'},
  {title: 'Solving', text: 'DSA Problems', icon: <SiCodeforces />, className: 'icon-dsa'},
]

const hobbiesItems = [
  {title: 'Playing', text: 'Chess', icon: <FaChessKnight />, className: 'icon-chess'},
  {title: 'Watching & Playing', text: 'Cricket', icon: <GiCricketBat />, className: 'icon-cricket'},
  {title: 'Watching', text: 'Movies', icon: <FaFilm />, className: 'icon-movies'},
  {title: 'Listening', text: 'Music', icon: <FaMusic />, className: 'icon-music'},
]

const aboutInfo = [
  {label: 'Name', value: 'Ramisetti Siva Rama Chakradhar', icon: <FaUser />},
  {label: 'From', value: 'Andhra Pradesh, India', icon: <FaMapMarkerAlt />},
  {label: 'Education', value: 'B.Tech CSE (AIML), 2023 - 2027', icon: <FaGraduationCap />},
  {label: 'Email', value: 'sivaramisetti700@gmail.com', icon: <FaEnvelope />},
]

const AboutSection = () => {
  const {scrollY} = useScroll()

  const leftY = useTransform(scrollY, [500, 1300], [60, -40])
  const rightY = useTransform(scrollY, [500, 1300], [-20, 50])
  const glowY = useTransform(scrollY, [500, 1300], [0, -120])

  return (
    <section
      id="About"
      className="about-section relative min-h-screen w-full overflow-hidden px-6 py-24 text-white"
    >
      <motion.div
        style={{y: glowY}}
        className="pointer-events-none absolute right-[-120px] top-32 h-80 w-80 rounded-full bg-purple-600/15 blur-[110px]"
      />

      <div className="about-wrapper">
        <motion.div
          style={{y: leftY}}
          className="about-left"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.25}}
          variants={staggerContainer}
        >
          <motion.img
            src="siva.png"
            alt="Siva"
            className="about-profile-img"
            variants={fadeRight}
            animate={{y: [0, -12, 0]}}
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          />

          <motion.div
            className="about-doing-card"
            variants={fadeUp}
            whileHover={{y: -6, scale: 1.01}}
            transition={{duration: 0.3}}
          >
            <h2 className="about-card-title">What I'm doing</h2>

            <motion.div className="about-card-grid" variants={staggerContainer}>
              {doingItems.map(item => (
                <motion.div
                  className="about-activity-card"
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{y: -5, scale: 1.03}}
                >
                  <div className={`about-activity-icon ${item.className}`}>{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about-learning-card"
            variants={fadeUp}
            whileHover={{y: -6, scale: 1.01}}
          >
            <h2 className="about-card-title">Known Technologies</h2>

            <div className="learning-list">
              {learningItems.map(item => (
                <motion.div
                  className="learning-pill"
                  key={item.name}
                  whileHover={{y: -4, scale: 1.05}}
                >
                  <span>{item.icon}</span>
                  <p>{item.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{y: rightY}}
          className="about-right"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.25}}
          variants={staggerContainer}
        >
          <motion.h3 className="about-subtitle" variants={fadeLeft}>
            About me
          </motion.h3>

          <motion.p className="about-heading" variants={fadeUp}>
            A passionate developer who loves building{' '}
            <span>intelligent solutions</span>.
          </motion.p>

          <motion.p className="about-description" variants={fadeUp}>
            I'm a CSE (AIML) student and MERN Stack Developer who loves turning ideas into real world projects.
            I enjoy solving problems, learning new technologies and building projects that create real impact.
          </motion.p>

          <motion.div
            className="about-info-card"
            variants={fadeUp}
            whileHover={{y: -6, scale: 1.01}}
          >
            {aboutInfo.map(item => (
              <motion.div
                className="about-info-item"
                key={item.label}
                whileHover={{x: 6}}
              >
                <div className="about-info-icon">{item.icon}</div>
                <div>
                  <h3 className="about-info-label">{item.label}</h3>
                  <p className="about-info-value">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="about-doing-card about-hobbies-card"
            variants={fadeUp}
            whileHover={{y: -6, scale: 1.01}}
          >
            <h2 className="about-card-title">Hobbies</h2>

            <motion.div className="about-card-grid" variants={staggerContainer}>
              {hobbiesItems.map(item => (
                <motion.div
                  className="about-activity-card"
                  key={item.text}
                  variants={fadeUp}
                  whileHover={{y: -5, scale: 1.03}}
                >
                  <div className={`about-activity-icon ${item.className}`}>{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection