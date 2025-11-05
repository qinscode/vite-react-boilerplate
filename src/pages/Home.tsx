import { useTranslation } from "react-i18next";
import type { FunctionComponent } from "../common/types";
import { Button } from "@/components/ui/button";

export const Home = (): FunctionComponent => {
	const { t, i18n } = useTranslation();

	const onTranslateButtonClick = async (): Promise<void> => {
		if (i18n.resolvedLanguage === "en") {
			await i18n.changeLanguage("es");
		} else {
			await i18n.changeLanguage("en");
		}
	};

	return (
		<div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 w-screen h-screen flex flex-col justify-center items-center gap-6">
			<div className="text-center space-y-4">
				<h1 className="text-6xl font-bold text-gray-900 dark:text-white">
					{t("home.greeting")}
				</h1>
				<p className="text-xl text-gray-600 dark:text-gray-300">
					shadcn/ui is now configured! 🎉
				</p>
			</div>
			
			<div className="flex gap-4 flex-wrap justify-center">
				<Button onClick={onTranslateButtonClick}>
					Translate
				</Button>
				<Button variant="secondary">
					Secondary
				</Button>
				<Button variant="outline">
					Outline
				</Button>
				<Button variant="destructive">
					Destructive
				</Button>
				<Button variant="ghost">
					Ghost
				</Button>
				<Button variant="link">
					Link
				</Button>
			</div>
		</div>
	);
};
