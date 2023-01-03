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
          quick: {
            title: "Быстрая сортировка"
          },
          merge: {
            title: "Сортировка слиянием"
          },
          heap: {
            title: "Пирамидальная сортировка"
          },
          bubble: {
            title: "Пузырьковая сортировка"
          },
          selection: {
            title: "Сортировка выбором"
          },
          insertion: {
            title: "Сортировка вставками"
          },
          gnome: {
            title: "Гномья сортировка"
          },
          shaker: {
            title: "Шейкерная сортировка"
          },
          oddEven: {
            title: "Чётно-нечётная сортировка"
          },
          pancake: {
            title: "Блинная сортировка"
          }
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
          quick: {
            title: "Quick Sort"
          },
          merge: {
            title: "Merge Sort"
          },
          heap: {
            title: "Heap Sort"
          },
          bubble: {
            title: "Bubble Sort"
          },
          selection: {
            title: "Selection Sort"
          },
          insertion: {
            title: "Insertion Sort"
          },
          gnome: {
            title: "Gnome Sort"
          },
          shaker: {
            title: "Shaker Sort"
          },
          oddEven: {
            title: "Odd Even Sort"
          },
          pancake: {
            title: "Pancake Sort"
          }
        }
      }
    }
  },
  lng: window.navigator.language ? window.navigator.language : "ru-RU",
  fallbackLng: "en-EN"
});

export default i18n;
