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
        algorithmDescription: {
          body: {
            title: "Описание",
            details: "Подробнее ",
            linkText: "тут",
            linkSort: {
              quick:
                "https://ru.wikipedia.org/wiki/" +
                "%D0%91%D1%8B%D1%81%D1%82%D1%80%D0%B0%D1%8F" +
                "_%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0",
              merge:
                "https://ru.wikipedia.org/wiki/" +
                "%D0%A1%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0" +
                "_%D1%81%D0%BB%D0%B8%D1%8F%D0%BD%D0%B8%D0%B5%D0%BC",
              heap:
                "https://ru.wikipedia.org/wiki/" +
                "%D0%9F%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F" +
                "_%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0",
              bubble:
                "https://ru.wikipedia.org/wiki/" +
                "%D0%A1%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0" +
                "_%D0%BF%D1%83%D0%B7%D1%8B%D1%80%D1%8C%D0%BA%D0%BE%D0%BC",
              selection:
                "https://ru.wikipedia.org/wiki/" +
                "%D0%A1%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0" +
                "_%D0%B2%D1%8B%D0%B1%D0%BE%D1%80%D0%BE%D0%BC",
              insertion:
                "https://ru.wikipedia.org/wiki/" +
                "%D0%A1%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0" +
                "_%D0%B2%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0%D0%BC%D0%B8",
              gnome:
                "https://ru.wikipedia.org/wiki/" +
                "%D0%93%D0%BD%D0%BE%D0%BC%D1%8C%D1%8F" +
                "_%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0",
              shaker:
                "https://ru.wikipedia.org/wiki/" +
                "%D0%A1%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0" +
                "_%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D1%88%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%D0%BC",
              oddEven:
                "https://translated.turbopages.org/" +
                "proxy_u/en-ru.ru.47b4b27f-63b427e3-52c392a4-74722d776562/" +
                "https/en.wikipedia.org/wiki/Odd%E2%80%93even_sort",
              pancake:
                "https://ru.wikipedia.org/wiki/" +
                "%D0%91%D0%BB%D0%B8%D0%BD%D0%BD%D0%B0%D1%8F" +
                "_%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0"
            },
            textSort: {
              quick:
                " -  это метод сортировки значений в списке в последовательные " +
                "списки с помощью повторяющейся процедуры.",
              merge: "",
              heap: "",
              bubble:
                " - это простой алгоритм сортировки. Для понимания и реализации " +
                "этот алгоритм - простейший, но эффективен он лишь для " +
                "небольших массивов.",
              selection: "",
              insertion: "",
              gnome: "",
              shaker: "",
              oddEven: "",
              pancake: ""
            }
          },
          complexity: {
            title: "Сложность",
            rowTitle: {
              average: "Средняя",
              best: "Лучшая",
              worst: "Худшая",
              space: "Объемная"
            }
          }
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
        algorithmDescription: {
          body: {
            title: "Description",
            details: "Details ",
            linkText: "here",
            linkSort: {
              quick: "https://en.wikipedia.org/wiki/Quicksort",
              merge: "https://en.wikipedia.org/wiki/Merge_sort",
              heap: "https://en.wikipedia.org/wiki/Heapsort",
              bubble: "https://en.wikipedia.org/wiki/Bubble_sort",
              selection: "https://en.wikipedia.org/wiki/Selection_sort",
              insertion: "https://en.wikipedia.org/wiki/Insertion_sort",
              gnome: "https://en.wikipedia.org/wiki/Gnome_sort",
              shaker: "https://en.wikipedia.org/wiki/Cocktail_shaker_sort",
              oddEven: "https://en.wikipedia.org/wiki/Odd%E2%80%93even_sort",
              pancake: "https://en.wikipedia.org/wiki/Pancake_sorting"
            },
            textSort: {
              quick:
                " is a sorting algorithm based on splitting the data " +
                "structure in smaller partitions and sort them recursively " +
                "until the data structure is sorted.",
              merge: "",
              heap: "",
              bubble:
                " is an iterative sorting algorithm that imitates " +
                "the movement of bubbles in sparkling water. The bubbles " +
                "represents the elements of the data structure.",
              selection: "",
              insertion: "",
              gnome: "",
              shaker: "",
              oddEven: "",
              pancake: ""
            }
          },
          complexity: {
            title: "Complexity",
            rowTitle: {
              average: "Average Complexity",
              best: "Best Case",
              worst: "Worst Case",
              space: "Space Complexity"
            }
          }
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
