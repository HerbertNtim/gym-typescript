import { SelectedPage } from "../../shared/types"
import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.png"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import HText from "../../shared/HText"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}


const ContactUs = ( { setSelectedPage }: Props) => {
  const inputStyle = 'mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white'

  const {
    register,
    trigger,
    formState: { errors }
   } = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if(!isValid) {
      e.preventDefault();
    }
  }

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/* HEADER */}
        <motion.div
          initial='hidden'
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ duration: 0.5 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x:0}
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat recusandae molestias magnam fugiat ipsum amet, sapiente sequi doloribus, corporis illum ab at natus qui laudantium officia cum debitis unde hic. Ex sapiente cumque adipisci quos.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-center gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial='hidden'
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y:0}
                    }}
          >
            <form action="https://formsubmit.co/el/cijuze"
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
            >
              <input
                className={inputStyle}
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
                type="text" 
              />
              {errors.name && (
                <p className="mt-1 text-primary-100">
                  {errors.name.type === "required" && "This field is required and should not exceed"}
                  {errors.name.type === 'maxLength' && "Max length is 100 characters"}  
                </p>
              )}
              <input
                className={inputStyle}
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/,
                })}
                type="email" 
              />
              {errors.email && (
                <p className="mt-1 text-primary-100">
                  {errors.email.type === "required" && "This field is required and should not exceed"}
                  {errors.email.type === 'pattern' && "Invalid Email address"}  
                </p>
              )}
              <textarea
                className={inputStyle}
                placeholder="MESSAGE"
                rows={4}
                cols ={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })} 
              />
              {errors.name && (
                <p className="mt-1 text-primary-100">
                  {errors.name.type === "required" && "This field is required and should not exceed"}
                  {errors.name.type === 'maxLength' && "Max length is 2000 characters"}  
                </p>
              )}


              <button
                type="submit"
                className="mt-5 rounded-g bg-secondary-500 transition   py-3 px-20 duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial='hidden'
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x:0}
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img src={ContactUsPageGraphic} alt="contact-us-page-graphic" 
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs