const STORAGE_KEY = "dobryak-top-list-v2";
const STORAGE_VERSION_KEY = "dobryak-top-list-version";
const IMPORT_VERSION = "anime-import-2026-04-06-v1";

const TYPE_LABELS = {
  all: "Все",
  anime: "Аниме",
  movie: "Фильм",
  series: "Сериал",
};

const STATUS_LABELS = {
  watched: "Просмотрено",
  planned: "Запланировано",
};

const IMPORTED_ANIME_LIST = `Реинкарнация безработного ✅ 4/10
Магическая битва ✅ 5/10
Обещанный неверленд 2 ✅ 4/10
Атака титанов ✅ 0/10
Выдающиеся звери 2 ✅ 1/10
Маг целитель ✅ 1/10
Пять невест 2
Доктор стоун 2 ✅ 3/10
Выдающиеся звери ✅ 3/10
Ванпачмен ✅ 7/10
Нагаторо
Я побрился
Коносуба
Коносуба 2 + фильм
Кобаящи и её горничная дракон
Милый во франксе ✅ 9/10
Удзаки
Ре зеро ✅ 2/10
Бездомный бог ✅ 8/10
ДхД ✅ 1/10
Да я паук и что с этого ✅ 1/10
Госпожа кагуя
Обещанный неверленд ✅ 9/10
Детектив уже мёртв ✅ 8/10
Кобаящи и её горничная дракон 2
Токийские мстители ✅ 5/10
О моём перерождение в слизь 2 ✅ 4/10
Мои девушки
Убей или умри
Нет игры нет жизни ✅ 9/10
Атака титанов 2-4 сезоны
Девочка зайка + фильм
Школа мертвецов
Убица акаме ✅10 /10
Мастера меча онлайн ✅ 8/10
Аркейн
У коми проблемы с общением
Джаки не будет отчаиваться
Такт опус ✅8/10
Мой семпай раздражает
Арифурэта ✅ 6/10
Кагуя 2
Ассасин аристократ ✅7/10
Военная хроника девочки + фильм
Ре Зеро 2
Клинок рассекающий демонов 2
Дневник будущего ✅ 6/10
Вайолет эвергарден
Добро пожаловать класс превосходства ✅ 7/10
Герой щита ✅ 6/10
Клинок рассекающий демонов
Токийский гуль 2 ✅ 6/10
Класс убийц ✅ 8/10
Домекано
Семь смертных грехов
Фарфоровая кукла ✅4/10
Школьная форма акэби
Шарлотта 8/10 ✅
Девушка на час
Мемуары ванитаса ✅ 6/10
Волчица и прянности
Безумный азарт ✅ 6/10
Кошечка из сакурасо
Башня бога
Эроманга сенсей
Месть масамунэ
Корона грешника ✅ 7/10
Непризнанный владыка демонов
Моб психо 100
Хоримия
Моя геройская академия
Гуррен Лаганн ✅ 10/10
DxD 2
Школа отчаяния ✅ 10/10
Семья шпиона
Моя девушка не только милая
Overlord ✅ 5/10
Мастера меча онлайн прогрессив
Евангелион
Игра друзей
Я люблю младшую сестру
Джоджо каменный океан
У меня не стоит
Джоджо 1 сезон
Киберпанк ✅10/10
Песнь ночных сов
Ликорис Рикоил
Вермейл в золотом
Джоджо рыцари звёздной пыли
Сатана на подработке 7/10 ✅
Сэнко
Пираты черной лагуны
Переродился в черного призываетеля
Привлекая поцелуй
Перерождение в меч
Человек бензопила ✅ 9/10
Перерождение дяди
Не люблю боль
Больше чем пара
Удзаки 2
Одинокий рокер
Восхождение в тени ✅ 8/10
Зачатие
Фермер стал сильнейшим героем
Блич тысячелетняя кровавая война
Нагаторо 2
Тетрадь смерти ✅ 10/10
Девушки и танки
Братик теперь не братик
Люди против богов
Несносные пришельцы
Берсерк
Кэйон!
Ребёнок идола
Поцелуй сестер
Жизнь с девушкой монстром
Не может моя сестрёнка быть милой
Ангельские ритмы ✅ 7/10
Доктор стоун новый мир
Крд деревня кузнецов
Адский рай
Иллюзия рая
Коносуба про Мегумин
В другом мире со смартфоном
Созданный в бездне ✅ 9/10
Опасность в моем сердце
Нагаторо манга
Томо-девушка
Я получил читерские способности
Моя любовь 990 уровня к Ямаде
Признанный в другой мир во 2 раз
Реинкарнация безработного 2
Кот домохозяин
Моя возлюбленная забыла очки
Мой счастливый брак
Блич: 1000 летняя война - прощание
Хоримия кусочек
Девушка на час 3
Я стал собакой чтобы вам не пришлось
Онидзука
Маленькая семпай с моей работы
Однушка лорда демонов
Иная ✅10/10
Плод Грисайи
Фрирен провожающая в путь
Рагна багровый ✅6/10
Восхождение в тени 2
100 девушек тебя любят
Сладкая жизнь
Нежить и неудача
Класс превосходства ✅8/10
Опасность в моём сердце 2
Поднятие уровня в одиночку ✅7/10
Магия и мускулы
Досанко-гяру чудо как милы
Ведьма и чудовище
Нежеланно бессмертный авантюрист
Я делаю всё возможное
Сасаки и Пи
Время пыток,принцесса!
Неразумный ангел в танце с демоном
Выходной Господина Злодея
Бар спецотряда демонического города
Благословение небожителей
Атака титанов финальная глава
Монолог фармацевта
Рубеж Шангри-ла
Коллекция Дзюндзи Ито
Идеальная грусть
Ями Шабаи: Японские рассказы
Усопшие
Королевская игра
Мои Девушки
Становясь волшебницей
Досанко-Гяру Чудо как Милы
Спецотряд Демонического Города
Поднятие Уровня в Одиночку
Подземелье Вкусностей
У меня мало друзей
Бессмертный авантюрист
История о дедушке и бабушке, молодые
Медуза не умеет плавать в ночи
Ветролом
Крд: тренировка столпов
Аля кокетничает со мной по русски ✅8/10
Соблазн 2,5 мерного измерения
Звездное дитя(все части и манга)`;

const state = {
  items: loadItems(),
  filters: {
    sort: "recent",
    type: "all",
    status: "watched",
  },
  imageCandidates: [],
  selectedImage: "",
  form: {
    type: "anime",
    status: "watched",
  },
};

const imageFetchQueue = [];
const imageFetchInProgress = new Set();
const MAX_CONCURRENT_IMAGE_FETCHES = 2;

const listNode = document.querySelector("#list");
const countNode = document.querySelector("#results-count");
const labelNode = document.querySelector("#results-label");
const itemTemplate = document.querySelector("#item-template");
const manageItemTemplate = document.querySelector("#manage-item-template");
const modal = document.querySelector("#item-modal");
const form = document.querySelector("#item-form");
const titleInput = document.querySelector("#title-input");
const ratingInput = document.querySelector("#rating-input");
const ratingValue = document.querySelector("#rating-value");
const imageStatus = document.querySelector("#image-status");
const imageOptions = document.querySelector("#image-options");
const manageListPanel = document.querySelector("#manage-list-panel");
const manageList = document.querySelector("#manage-list");
const toggleManageListButton = document.querySelector("#toggle-manage-list");
const manageSearchInput = document.querySelector("#manage-search-input");

bindEvents();
render();
syncRatingAvailability();
primeVisibleImageFetches();

function bindEvents() {
  document.querySelectorAll("[data-filter-group]").forEach((button) => {
    button.addEventListener("click", () => {
      const { filterGroup, value } = button.dataset;
      state.filters[filterGroup] = value;
      syncFilterButtons();
      render();
      primeVisibleImageFetches();
    });
  });

  document.querySelectorAll("[data-form-group]").forEach((button) => {
    button.addEventListener("click", () => {
      const { formGroup, value } = button.dataset;
      state.form[formGroup] = value;
      syncFormButtons();
      syncRatingAvailability();
    });
  });

  document.querySelector("#open-modal").addEventListener("click", openModal);
  document.querySelector("#close-modal").addEventListener("click", closeModal);
  document.querySelector("#search-images").addEventListener("click", handleImageSearch);
  document.querySelector("#open-yandex-images").addEventListener("click", openYandexImages);
  toggleManageListButton.addEventListener("click", toggleManageList);
  manageSearchInput.addEventListener("input", renderManageList);

  ratingInput.addEventListener("input", () => {
    if (state.form.status === "planned") {
      return;
    }

    ratingValue.textContent = `${ratingInput.value}/10`;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value.trim();
    if (!title) {
      titleInput.focus();
      return;
    }

    const item = {
      id: crypto.randomUUID(),
      title,
      type: state.form.type,
      status: state.form.status,
      rating: state.form.status === "planned" ? null : Number(ratingInput.value),
      image: state.selectedImage || "",
      createdAt: new Date().toISOString(),
      imageRequested: Boolean(state.selectedImage),
    };

    state.items.unshift(item);
    saveItems();
    closeModal();
    render();
    primeVisibleImageFetches();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

function loadItems() {
  const currentVersion = localStorage.getItem(STORAGE_VERSION_KEY);
  if (currentVersion !== IMPORT_VERSION) {
    const importedItems = parseImportedAnimeList(IMPORTED_ANIME_LIST);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(importedItems));
    localStorage.setItem(STORAGE_VERSION_KEY, IMPORT_VERSION);
    return importedItems;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveItems() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
}

function parseImportedAnimeList(source) {
  const lines = source.split("\n").map((line) => line.trim()).filter(Boolean);

  return lines.map((line, index) => {
    const watched = line.includes("✅");
    const ratingMatch = watched ? line.match(/(\d+)\s*\/\s*10/) : null;
    const title = line
      .replace("✅", " ")
      .replace(/(\d+)\s*\/\s*10/, " ")
      .replace(/\s+/g, " ")
      .trim();

    return {
      id: crypto.randomUUID(),
      title,
      type: "anime",
      status: watched ? "watched" : "planned",
      rating: watched && ratingMatch ? Number(ratingMatch[1]) : null,
      image: "",
      createdAt: new Date(Date.now() - index * 60000).toISOString(),
      imageRequested: false,
    };
  });
}

function render() {
  syncFilterButtons();

  const filteredItems = getFilteredItems();
  labelNode.textContent = `${STATUS_LABELS[state.filters.status]} · ${TYPE_LABELS[state.filters.type]}`;
  countNode.textContent = filteredItems.length;
  listNode.innerHTML = "";

  if (!filteredItems.length) {
    listNode.innerHTML = `
      <div class="empty-state">
        Здесь пока пусто. Нажми на плюс справа сверху и добавь первый тайтл.
      </div>
    `;
    return;
  }

  filteredItems.forEach((item) => {
    const fragment = itemTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".list-item");
    const poster = fragment.querySelector(".poster");
    const ratingNode = fragment.querySelector(".item-rating");

    poster.src = item.image || createPlaceholderImage(item.title);
    poster.alt = item.title;

    fragment.querySelector(".item-title").textContent = item.title;
    fragment.querySelector(".item-type").textContent = TYPE_LABELS[item.type];
    fragment.querySelector(".item-status").textContent = STATUS_LABELS[item.status];
    fragment.querySelector(".item-date").textContent = formatDate(item.createdAt);

    if (item.status === "watched" && item.rating !== null) {
      ratingNode.textContent = `${item.rating}/10`;
      ratingNode.hidden = false;
    } else {
      ratingNode.hidden = true;
    }

    const openSearch = () => {
      window.open(`https://ya.ru/search/?text=${encodeURIComponent(item.title)}`, "_blank", "noopener,noreferrer");
    };

    card.addEventListener("click", openSearch);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openSearch();
      }
    });

    listNode.appendChild(fragment);
  });
}

function getFilteredItems() {
  return state.items
    .filter((item) => state.filters.status === item.status)
    .filter((item) => state.filters.type === "all" || state.filters.type === item.type)
    .sort((a, b) => {
      if (state.filters.sort === "rating") {
        const ratingA = a.rating ?? -1;
        const ratingB = b.rating ?? -1;
        return ratingB - ratingA || new Date(b.createdAt) - new Date(a.createdAt);
      }

      return new Date(b.createdAt) - new Date(a.createdAt);
    });
}

function syncFilterButtons() {
  document.querySelectorAll("[data-filter-group]").forEach((button) => {
    const active = state.filters[button.dataset.filterGroup] === button.dataset.value;
    button.classList.toggle("chip-active", active);
  });
}

function syncFormButtons() {
  document.querySelectorAll("[data-form-group]").forEach((button) => {
    const active = state.form[button.dataset.formGroup] === button.dataset.value;
    button.classList.toggle("segment-active", active);
  });
}

function syncRatingAvailability() {
  const planned = state.form.status === "planned";
  ratingInput.disabled = planned;
  ratingValue.textContent = planned ? "Недоступно для запланированного" : `${ratingInput.value}/10`;
}

function openModal() {
  form.reset();
  state.form.type = "anime";
  state.form.status = state.filters.status;
  state.imageCandidates = [];
  state.selectedImage = "";
  ratingInput.value = "8";
  imageStatus.textContent = "";
  imageStatus.className = "image-status";
  imageOptions.innerHTML = "";
  manageListPanel.hidden = true;
  toggleManageListButton.textContent = "Открыть мини список";
  manageSearchInput.value = "";
  syncFormButtons();
  syncRatingAvailability();
  modal.showModal();
  titleInput.focus();
}

function closeModal() {
  modal.close();
}

function toggleManageList() {
  const shouldOpen = manageListPanel.hidden;
  manageListPanel.hidden = !shouldOpen;
  toggleManageListButton.textContent = shouldOpen ? "Скрыть мини список" : "Открыть мини список";

  if (shouldOpen) {
    renderManageList();
  }
}

function renderManageList() {
  manageList.innerHTML = "";

  if (!state.items.length) {
    manageList.innerHTML = '<div class="manage-list-empty">Список пока пуст.</div>';
    return;
  }

  const sortedItems = [...state.items].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const query = manageSearchInput.value.trim().toLowerCase();
  const filteredItems = sortedItems.filter((item) => item.title.toLowerCase().includes(query));

  if (!filteredItems.length) {
    manageList.innerHTML = '<div class="manage-list-empty">Ничего не найдено.</div>';
    return;
  }

  filteredItems.forEach((item) => {
    const fragment = manageItemTemplate.content.cloneNode(true);
    fragment.querySelector(".manage-item-title").textContent = item.title;
    fragment.querySelector(".manage-item-meta").textContent = item.status === "watched" && item.rating !== null
      ? `${TYPE_LABELS[item.type]} · ${STATUS_LABELS[item.status]} · ${item.rating}/10`
      : `${TYPE_LABELS[item.type]} · ${STATUS_LABELS[item.status]}`;

    fragment.querySelector(".delete-row-button").addEventListener("click", () => {
      state.items = state.items.filter((entry) => entry.id !== item.id);
      saveItems();
      render();
      renderManageList();
    });

    manageList.appendChild(fragment);
  });
}

function formatDate(value) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

async function handleImageSearch() {
  const query = titleInput.value.trim();
  if (!query) {
    imageStatus.textContent = "Сначала введи название.";
    imageStatus.className = "image-status image-status-error";
    titleInput.focus();
    return;
  }

  imageStatus.textContent = "Ищу варианты в Яндекс.Картинках...";
  imageStatus.className = "image-status";
  imageOptions.innerHTML = "";

  try {
    const urls = await fetchYandexImageCandidates(query);
    if (!urls.length) {
      throw new Error("Подходящие изображения не найдены.");
    }

    state.imageCandidates = urls.slice(0, 3);
    state.selectedImage = state.imageCandidates[0];
    imageStatus.textContent = "Выбери картинку для карточки.";
    renderImageOptions();
  } catch (error) {
    state.imageCandidates = [];
    state.selectedImage = "";
    imageOptions.innerHTML = "";
    imageStatus.textContent = `${error.message} Можно открыть Яндекс.Картинки вручную.`;
    imageStatus.className = "image-status image-status-error";
  }
}

function renderImageOptions() {
  imageOptions.innerHTML = "";

  state.imageCandidates.forEach((url, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `image-option${state.selectedImage === url ? " image-option-selected" : ""}`;

    const image = document.createElement("img");
    image.src = url;
    image.alt = `Вариант ${index + 1}`;

    const label = document.createElement("span");
    label.textContent = `${index + 1}`;

    button.append(image, label);
    button.addEventListener("click", () => {
      state.selectedImage = url;
      renderImageOptions();
    });

    imageOptions.appendChild(button);
  });
}

function openYandexImages() {
  const query = titleInput.value.trim();
  const url = `https://yandex.com/images/search?text=${encodeURIComponent(query || "аниме")}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function primeVisibleImageFetches() {
  getFilteredItems()
    .filter((item) => !item.image && !item.imageRequested)
    .slice(0, 12)
    .forEach((item) => queueImageFetch(item.id));
}

function queueImageFetch(itemId) {
  if (imageFetchQueue.includes(itemId) || imageFetchInProgress.has(itemId)) {
    return;
  }

  imageFetchQueue.push(itemId);
  drainImageFetchQueue();
}

function drainImageFetchQueue() {
  while (imageFetchInProgress.size < MAX_CONCURRENT_IMAGE_FETCHES && imageFetchQueue.length) {
    const itemId = imageFetchQueue.shift();
    const item = state.items.find((entry) => entry.id === itemId);
    if (!item || item.image || item.imageRequested) {
      continue;
    }

    item.imageRequested = true;
    imageFetchInProgress.add(itemId);
    fetchAndStoreImage(item).finally(() => {
      imageFetchInProgress.delete(itemId);
      drainImageFetchQueue();
    });
  }
}

async function fetchAndStoreImage(item) {
  try {
    const candidates = await fetchYandexImageCandidates(`${item.title} аниме`);
    if (candidates.length) {
      item.image = candidates[0];
      saveItems();
      render();
      if (!manageListPanel.hidden) {
        renderManageList();
      }
    }
  } catch {
    saveItems();
  }
}

async function fetchYandexImageCandidates(query) {
  const yandexUrl = `https://yandex.com/images/search?text=${encodeURIComponent(query)}`;
  const proxyUrls = [
    `https://api.allorigins.win/raw?url=${encodeURIComponent(yandexUrl)}`,
    `https://corsproxy.io/?${encodeURIComponent(yandexUrl)}`,
    `https://cors.isomorphic-git.org/${yandexUrl}`,
  ];

  const results = await Promise.allSettled(proxyUrls.map((proxyUrl) => fetchProxyCandidates(proxyUrl)));

  for (const result of results) {
    if (result.status === "fulfilled" && result.value.length) {
      return result.value.slice(0, 3);
    }
  }

  throw new Error("Автопоиск картинок сейчас недоступен.");
}

async function fetchProxyCandidates(proxyUrl) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3500);

  try {
    const response = await fetch(proxyUrl, {
      headers: {
        Accept: "text/html, text/plain, */*",
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      return [];
    }

    const html = await response.text();
    return extractImageUrls(html);
  } catch {
    return [];
  } finally {
    clearTimeout(timeoutId);
  }
}

function extractImageUrls(source) {
  const normalized = source
    .replaceAll("&quot;", "\"")
    .replaceAll("&amp;", "&")
    .replaceAll("\\/", "/")
    .replaceAll("\\u002F", "/");

  const previews = Array.from(
    normalized.matchAll(/"image":"(\/\/avatars\.mds\.yandex\.net[^"]+)"/g),
    (match) => sanitizeImageUrl(match[1]),
  );

  const thumbs = Array.from(
    normalized.matchAll(/"thumb":\{"url":"(\/\/avatars\.mds\.yandex\.net[^"]+)"/g),
    (match) => sanitizeImageUrl(match[1]),
  );

  const preferred = Array.from(
    normalized.matchAll(/"img_href":"(https?:\/\/[^"]+)"/g),
    (match) => sanitizeImageUrl(match[1]),
  );

  const fallback = Array.from(
    normalized.matchAll(/https?:\/\/[^\s"'<>]+?\.(?:jpg|jpeg|png|webp)(?:\?[^\s"'<>]*)?/gi),
    (match) => sanitizeImageUrl(match[0]),
  );

  return Array.from(new Set([...previews, ...thumbs, ...preferred, ...fallback])).filter((url) => {
    return (
      url &&
      !url.includes("favicon") &&
      !url.includes(".svg") &&
      !url.includes("logo") &&
      !url.includes("avatar") &&
      !url.includes("captcha") &&
      !isVideoPreviewUrl(url)
    );
  });
}

function sanitizeImageUrl(url) {
  const normalized = url
    .replace(/^\/\//, "https://")
    .replace(/^https?:\/\/https?:\/\//, "https://")
    .replace(/\\u0026/g, "&")
    .replace(/&amp;/g, "&")
    .trim();

  return normalized.includes("avatars.mds.yandex.net") && !normalized.includes("&n=")
    ? `${normalized}&n=13`
    : normalized;
}

function isVideoPreviewUrl(url) {
  const blockedPatterns = [
    "youtube.com",
    "ytimg.com",
    "youtu.be",
    "rutube.ru",
    "rutubelist.ru",
    "vimeo.com",
    "vkvideo",
    "twitch.tv",
    "dailymotion.com",
    "okko.tv",
    "kinopoisk.ru",
    "ivi.ru",
    "premier.one",
    "wink.ru",
    "netflix",
    "video",
    "trailer",
    "teaser",
    "shorts",
    "maxresdefault",
    "hqdefault",
    "/vi/",
  ];

  const lower = url.toLowerCase();
  return blockedPatterns.some((pattern) => lower.includes(pattern));
}

function createPlaceholderImage(title) {
  const safeTitle = escapeXml(title.slice(0, 24));
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
      <defs>
        <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#4a4a4a" />
          <stop offset="100%" stop-color="#111111" />
        </linearGradient>
      </defs>
      <rect width="800" height="800" rx="80" fill="url(#g)" />
      <circle cx="640" cy="140" r="110" fill="rgba(255,255,255,0.08)" />
      <text x="60" y="400" fill="#f5f5f5" font-size="52" font-family="Arial, sans-serif">${safeTitle}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.trim())}`;
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&apos;");
}
