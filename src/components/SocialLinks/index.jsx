import { useTranslation } from "react-i18next";
import { FaBehance, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; // Importando o toastify
import "react-toastify/dist/ReactToastify.css"; // Estilo do toastify

export function SocialLinks() {
	const { t } = useTranslation();

	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text).then(
			() => {
				toast.success(t("about.emailCopied"), {
					position: "bottom-center",
					autoClose: 1500,
					hideProgressBar: true,
				});
			},
			(err) => {
				console.error("Erro ao copiar o texto: ", err);
			},
		);
	};

	return (
		<>
			<div className="mx-auto grid gap-2 text-center text-[1.6rem] mt-[3.3rem]">
				<button
					type="button"
					onClick={() => copyToClipboard("lais.sanseverino@gmail.com")}
				>
					lais.sanseverino@gmail.com
				</button>
				<Link to="https://wa.me/5543996474471" target="_blank">
					+55 43 99647-4471
				</Link>
			</div>
			<div className="mx-[auto] flex gap-[4.5rem] mb-[6rem] mt-[4rem]">
				<Link
					to="https://www.linkedin.com/in/laissanseverino/"
					target="_blank"
					className="p-[1.2rem] border border-[#848484] rounded-[50%]"
				>
					<FaLinkedinIn size={20} className="fill-[#2F2F2F]" />
				</Link>
				<Link
					to="https://www.behance.net/Lsanseverino"
					target="_blank"
					className="p-[1.2rem] border border-[#848484] rounded-[50%]"
				>
					<FaBehance size={20} className="fill-[#2F2F2F]" />
				</Link>
			</div>
		</>
	);
}
