import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid"
import { BenefitType, SelectedPage } from "../../shared/types"
import { motion } from "framer-motion"
import HText from "../../shared/HText"
import Benefit from "./Benefit"
import ActionButton from "../../shared/ActionButton"
import BenefitsPageGraphic from '../../assets/BenefitsPageGraphic.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Neque adipiscing amet enim. Feugiat dolor en"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Neque adipiscing amet enim. Feugiat dolor en"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Neque adipiscing amet enim. Feugiat dolor en"
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2}
    }
}


const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section 
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial='hidden'
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x:0}
                }}
            >
                <HText>MORE THAN JUST GYM.</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div 
                className="md:flex items-center justify-between gap-8 mt-5"
                initial= "hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                        key={benefit.title}
                        icon={benefit.icon}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage} 
                        title={benefit.title}                    
                    />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTIONS */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img src={BenefitsPageGraphic} alt="benefits-page-graphic" className="mx-auto"/>

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <motion.div
                        initial='hidden'
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5}}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x:0}
                        }}
                    >
                        <div className=" before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <div>
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </div>
                        </div>
                    </motion.div>

                    {/* DESCRIPTION */}
                    <motion.div
                        initial='hidden'
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x:0}
                        }}
                    >
                        <p className="my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum esse unde reprehenderit, voluptate eveniet sunt fuga expedita? Non eveniet sapiente quia, ratione expedita quibusdam esse facilis ipsum dignissimos perspiciatis consequatur.</p>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt consectetur nisi rem commodi! Et illo veritatis facilis harum sunt, a earum quis animi, aliquam corporis magni temporibus ratione. Neque, est obcaecati impedit rem aperiam inventore? Libero ab iure est aspernatur.</p>
                    </motion.div>

                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits