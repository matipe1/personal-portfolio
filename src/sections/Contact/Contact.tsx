import styles from './Contact.module.css';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import Swal from 'sweetalert2';

const InputFields = z.object({
    email: z.string().email(),
    name: z.string(),
    message: z.string()
});

type InputFields = z.infer<typeof InputFields>;

export const Contact = () => {
    const { register, handleSubmit } = useForm<InputFields>();

    const onSubmit: SubmitHandler<InputFields> = async (data) => {
        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("message", data.message);

        formData.append("access_key", "3b9b86ae-d0e7-4b6b-9457-c7f580bd37e9");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Message Sent!",
                text: "Thank you for reaching out. I'll get back to you soon!",
                icon: "success",
            });
        }
    };

    return(
        <section id="contact" className={styles.contactContainer}>
            <h2 className={styles.title}>Contact Me</h2>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.fields}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name <span style={{color: "#ff2323"}}>*</span></label>
                        <input
                            className={styles.field}
                            type="text"
                            id="name"
                            {...register("name")}
                            placeholder="Enter your name"
                            required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email <span style={{color: "#ff2323"}}>*</span></label>
                        <input
                            className={styles.field}
                            type="email" 
                            id="email"
                            {...register("email")}
                            placeholder="Enter your email"
                            required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Message <span style={{color: "#ff2323"}}>*</span></label>
                        <textarea 
                            className={`${styles.field} ${styles.message}`}
                            id="message"
                            {...register("message")}
                            placeholder="Enter your message"
                            required />
                    </div>
                </div>

                <div className={styles.fields}>
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </section>
    );
}