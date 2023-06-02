import { translatedWords } from "../mock-options/translate";

export const useTranslate = (wordToTranslate) => {
    return translatedWords.find(word => word.value === wordToTranslate)?.label || wordToTranslate;
}