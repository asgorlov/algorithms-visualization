import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        mainPage: {
          title: "Визуализация алгоритмов",
          description:
            "Выберете сортировку, работу которой Вы хотели бы посмотреть."
        },
        slider: {
          delay: "Время выполнения одного шага в секундах",
          length: "Размер массива для сортировки"
        },
        button: {
          back: "Назад",
          sort: "Сортировать",
          shuffle: "Перемешать",
          reset: "Сбросить",
          submit: "Ок"
        },
        sort: {
          quick: "Быстрая сортировка",
          merge: "Сортировка слиянием",
          heap: "Пирамидальная сортировка",
          bubble: "Пузырьковая сортировка",
          selection: "Сортировка выбором",
          insertion: "Сортировка вставками",
          gnome: "Гномья сортировка",
          shaker: "Шейкерная сортировка",
          oddEven: "Чётно-нечётная сортировка",
          pancake: "Блинная сортировка"
        }
      }
    },
    en: {
      translation: {
        mainPage: {
          title: "Visualization of algorithms",
          description: "Select the sort you want to view."
        },
        slider: {
          delay: "Step delay in seconds",
          length: "Sorting array length"
        },
        button: {
          back: "Back",
          sort: "Sort",
          shuffle: "Shuffle",
          reset: "Reset",
          submit: "Ok"
        },
        sort: {
          quick: "Quick Sort",
          merge: "Merge Sort",
          heap: "Heap Sort",
          bubble: "Bubble Sort",
          selection: "Selection Sort",
          insertion: "Insertion Sort",
          gnome: "Gnome Sort",
          shaker: "Shaker Sort",
          oddEven: "Odd Even Sort",
          pancake: "Pancake Sort"
        }
      }
    }
  },
  lng: window.navigator.language ? window.navigator.language : "ru-RU",
  fallbackLng: "en-EN"
});

export default i18n;
