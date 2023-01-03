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
            textSort: {
              quick:
                "Быстрая сортировка - это алгоритм сортировки, " +
                "основанный на разделении структуры данных на более мелкие " +
                "разделы и их рекурсивной сортировке до тех пор, пока " +
                "структура данных не будет отсортирована.\nЭто разделение на " +
                "разделы выполняется на основе элемента, называемого " +
                "пивотом(pivot): все элементы, большие, чем пивот, " +
                "размещаются в правой части структуры, меньшие - слева, " +
                "создавая два раздела. Затем эта процедура рекурсивно " +
                "применяется к двум разделам и так далее.",
              merge: "",
              heap: "",
              bubble:
                "Пузырьковая сортировка - это итеративный алгоритм сортировки, " +
                "который имитирует движение пузырьков в газированной воде. " +
                "Пузырьки представляют элементы структуры данных.\nБольшие " +
                "пузырьки достигают вершины быстрее, чем пузырьки поменьше, " +
                "и этот алгоритм работает таким же образом. Он выполняет " +
                "итерацию по структуре данных и для каждого цикла сжимает " +
                "текущий элемент со следующим, меняя их местами, если они " +
                "расположены в неправильном порядке.",
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
            textSort: {
              quick:
                "Quick Sort is a sorting algorithm based on splitting " +
                "the data structure in smaller partitions and sort them " +
                "recursively until the data structure is sorted.\nThis " +
                "division in partitions is done based on an element, " +
                "called pivot: all the elements bigger than the pivot get " +
                "placed on the right side of the structure, the smaller ones " +
                "to the left, creating two partitions. Next, this procedure " +
                "gets applied recursively to the two partitions and so on.",
              merge: "",
              heap: "",
              bubble:
                "Bubble Sort is an iterative sorting algorithm that imitates " +
                "the movement of bubbles in sparkling water. The bubbles " +
                "represents the elements of the data structure.\nThe bigger " +
                "bubbles reach the top faster than smaller bubbles, and this " +
                "algorithm works in the same way. It iterates through the " +
                "data structure and for each cycle compares the current " +
                "element with the next one, swapping them if they are in " +
                "the wrong order.",
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
