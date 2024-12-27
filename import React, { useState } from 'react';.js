import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const BibleApp = () => {
  const [selectedSection, setSelectedSection] = useState("torah");
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const bibleStructure = {
    tanakh: {
      torah: [
        { spanish: "Génesis", hebrew: "בְּרֵאשִׁית", phonetic: "Bereshit" },
        { spanish: "Éxodo", hebrew: "שְׁמוֹת", phonetic: "Shemot" },
        { spanish: "Levítico", hebrew: "וַיִּקְרָא", phonetic: "Vaikrá" },
        { spanish: "Números", hebrew: "בְּמִדְבָּר", phonetic: "Bamidbar" },
        { spanish: "Deuteronomio", hebrew: "דְּבָרִים", phonetic: "Devarim" },
      ],
      neviim: [
        { spanish: "Josué", hebrew: "יְהוֹשֻׁעַ", phonetic: "Yehoshúa" },
        { spanish: "Jueces", hebrew: "שׁוֹפְטִים", phonetic: "Shoftim" },
        {
          spanish: "Samuel I",
          hebrew: "שְׁמוּאֵל א׳",
          phonetic: "Shmuel Alef",
        },
        {
          spanish: "Samuel II",
          hebrew: "שְׁמוּאֵל ב׳",
          phonetic: "Shmuel Bet",
        },
        { spanish: "Reyes I", hebrew: "מְלָכִים א׳", phonetic: "Melajim Alef" },
        { spanish: "Reyes II", hebrew: "מְלָכִים ב׳", phonetic: "Melajim Bet" },
        { spanish: "Isaías", hebrew: "יְשַׁעְיָהוּ", phonetic: "Yeshayahu" },
        { spanish: "Jeremías", hebrew: "יִרְמְיָהוּ", phonetic: "Yirmeyahu" },
        { spanish: "Ezequiel", hebrew: "יְחֶזְקֵאל", phonetic: "Yejezkel" },
        { spanish: "Oseas", hebrew: "הוֹשֵׁעַ", phonetic: "Hoshea" },
        { spanish: "Joel", hebrew: "יוֹאֵל", phonetic: "Yoel" },
        { spanish: "Amós", hebrew: "עָמוֹס", phonetic: "Amos" },
        { spanish: "Abdías", hebrew: "עֹבַדְיָה", phonetic: "Ovadia" },
        { spanish: "Jonás", hebrew: "יוֹנָה", phonetic: "Yonah" },
        { spanish: "Miqueas", hebrew: "מִיכָה", phonetic: "Mija" },
        { spanish: "Nahúm", hebrew: "נַחוּם", phonetic: "Najum" },
        { spanish: "Habacuc", hebrew: "חֲבַקּוּק", phonetic: "Javakuk" },
        { spanish: "Sofonías", hebrew: "צְפַנְיָה", phonetic: "Tzefania" },
        { spanish: "Hageo", hebrew: "חַגַּי", phonetic: "Jagai" },
        { spanish: "Zacarías", hebrew: "זְכַרְיָה", phonetic: "Zejaria" },
        { spanish: "Malaquías", hebrew: "מַלְאָכִי", phonetic: "Malaji" },
      ],
      ketuvim: [
        { spanish: "Salmos", hebrew: "תְּהִלִּים", phonetic: "Tehilim" },
        { spanish: "Proverbios", hebrew: "מִשְׁלֵי", phonetic: "Mishlei" },
        { spanish: "Job", hebrew: "אִיּוֹב", phonetic: "Iyov" },
        {
          spanish: "Cantar de los Cantares",
          hebrew: "שִׁיר הַשִּׁירִים",
          phonetic: "Shir Hashirim",
        },
        { spanish: "Rut", hebrew: "רוּת", phonetic: "Rut" },
        { spanish: "Lamentaciones", hebrew: "אֵיכָה", phonetic: "Eija" },
        { spanish: "Eclesiastés", hebrew: "קֹהֶלֶת", phonetic: "Kohelet" },
        { spanish: "Ester", hebrew: "אֶסְתֵּר", phonetic: "Ester" },
        { spanish: "Daniel", hebrew: "דָּנִיֵּאל", phonetic: "Daniel" },
        {
          spanish: "Esdras-Nehemías",
          hebrew: "עֶזְרָא-נְחֶמְיָה",
          phonetic: "Ezra-Nejemia",
        },
        {
          spanish: "Crónicas I",
          hebrew: "דִּבְרֵי הַיָּמִים א׳",
          phonetic: "Divrei Hayamim Alef",
        },
        {
          spanish: "Crónicas II",
          hebrew: "דִּבְרֵי הַיָּמִים ב׳",
          phonetic: "Divrei Hayamim Bet",
        },
      ],
    },
    britHadasha: [
      { spanish: "Mateo", hebrew: "מַתָּי", phonetic: "Matay" },
      { spanish: "Marcos", hebrew: "מַרְקוֹס", phonetic: "Markos" },
      { spanish: "Lucas", hebrew: "לוּקָס", phonetic: "Lukas" },
      { spanish: "Juan", hebrew: "יוֹחָנָן", phonetic: "Yohanan" },
      {
        spanish: "Hechos",
        hebrew: "מַעֲשֵׂי הַשְּׁלִיחִים",
        phonetic: "Ma'asei HaShlichim",
      },
      {
        spanish: "Romanos",
        hebrew: "אִגֶּרֶת אֶל הָרוֹמִיִּים",
        phonetic: "Igeret El HaRomiyim",
      },
      {
        spanish: "1 Corintios",
        hebrew: "אִגֶּרֶת אֶל הַקּוֹרִינְתִּיִּים א׳",
        phonetic: "Igeret El HaKorintiyim Alef",
      },
      {
        spanish: "2 Corintios",
        hebrew: "אִגֶּרֶת אֶל הַקּוֹרִינְתִּיִּים ב׳",
        phonetic: "Igeret El HaKorintiyim Bet",
      },
      {
        spanish: "Gálatas",
        hebrew: "אִגֶּרֶת אֶל הַגָּלָטִיִּים",
        phonetic: "Igeret El HaGalatim",
      },
      {
        spanish: "Efesios",
        hebrew: "אִגֶּרֶת אֶל הָאֶפְסִיִּים",
        phonetic: "Igeret El HaEfsiyim",
      },
      {
        spanish: "Filipenses",
        hebrew: "אִגֶּרֶת אֶל הַפִּילִפִּיִּים",
        phonetic: "Igeret El HaPilippiyim",
      },
      {
        spanish: "Colosenses",
        hebrew: "אִגֶּרֶת אֶל הַקּוֹלוֹסִיִּים",
        phonetic: "Igeret El HaKolosiyim",
      },
      {
        spanish: "1 Tesalonicenses",
        hebrew: "אִגֶּרֶת אֶל הַתֵּסָלוֹנִיקִיִּים א׳",
        phonetic: "Igeret El HaTesalonikiyim Alef",
      },
      {
        spanish: "2 Tesalonicenses",
        hebrew: "אִגֶּרֶת אֶל הַתֵּסָלוֹנִיקִיִּים ב׳",
        phonetic: "Igeret El HaTesalonikiyim Bet",
      },
      {
        spanish: "1 Timoteo",
        hebrew: "אִגֶּרֶת אֶל טִימוֹתִיאוֹס א׳",
        phonetic: "Igeret El Timotiyos Alef",
      },
      {
        spanish: "2 Timoteo",
        hebrew: "אִגֶּרֶת אֶל טִימוֹתִיאוֹס ב׳",
        phonetic: "Igeret El Timotiyos Bet",
      },
      {
        spanish: "Tito",
        hebrew: "אִגֶּרֶת אֶל טִיטוֹס",
        phonetic: "Igeret El Titos",
      },
      {
        spanish: "Filemón",
        hebrew: "אִגֶּרֶת אֶל פִּילֵימוֹן",
        phonetic: "Igeret El Filemon",
      },
      {
        spanish: "Hebreos",
        hebrew: "אִגֶּרֶת אֶל הָעִבְרִים",
        phonetic: "Igeret El HaIvrim",
      },
      {
        spanish: "Santiago",
        hebrew: "אִגֶּרֶת יַעֲקֹב",
        phonetic: "Igeret Yaakov",
      },
      {
        spanish: "1 Pedro",
        hebrew: "אִגֶּרֶת פֶּטְרוֹס א׳",
        phonetic: "Igeret Petros Alef",
      },
      {
        spanish: "2 Pedro",
        hebrew: "אִגֶּרֶת פֶּטְרוֹס ב׳",
        phonetic: "Igeret Petros Bet",
      },
      {
        spanish: "1 Juan",
        hebrew: "אִגֶּרֶת יוֹחָנָן א׳",
        phonetic: "Igeret Yohanan Alef",
      },
      {
        spanish: "2 Juan",
        hebrew: "אִגֶּרֶת יוֹחָנָן ב׳",
        phonetic: "Igeret Yohanan Bet",
      },
      {
        spanish: "3 Juan",
        hebrew: "אִגֶּרֶת יוֹחָנָן ג׳",
        phonetic: "Igeret Yohanan Gimel",
      },
      {
        spanish: "Judas",
        hebrew: "אִגֶּרֶת יְהוּדָה",
        phonetic: "Igeret Yehuda",
      },
      {
        spanish: "Apocalipsis",
        hebrew: "הִתְגַּלוּת יוֹחָנָן",
        phonetic: "Hitgalut Yohanan",
      },
    ],
  };

  const chapterData = {
    totalChapters: 50,
    content: "Contenido del capítulo...",
  };

  const handlePreviousChapter = () => {
    if (selectedChapter > 1) {
      setSelectedChapter((prev) => prev - 1);
    }
  };

  const handleNextChapter = () => {
    if (selectedChapter < chapterData.totalChapters) {
      setSelectedChapter((prev) => prev + 1);
    }
  };

  const renderBookList = (section) => {
    const books =
      section === "britHadasha"
        ? bibleStructure.britHadasha
        : bibleStructure.tanakh[section];

    return (
      <div className="grid grid-cols-2 gap-2">
        {books.map((book) => (
          <Button
            key={book.phonetic}
            variant={
              selectedBook?.phonetic === book.phonetic ? "default" : "secondary"
            }
            className={`w-full h-auto min-h-[100px] p-2 flex flex-col items-center justify-center text-center ${
              selectedBook?.phonetic === book.phonetic
                ? "bg-sky-600 hover:bg-sky-700 text-white"
                : "bg-sky-100 hover:bg-sky-200 text-sky-900"
            }`}
            onClick={() => {
              setSelectedBook(book);
              setSelectedChapter(1);
            }}
          >
            <div className="font-bold">{book.spanish}</div>
            <div className="text-sm opacity-80">{book.phonetic}</div>
            <div dir="rtl" className="text-sm mt-1">
              {book.hebrew}
            </div>
          </Button>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Biblia Toráh Viviente
          </CardTitle>
          <div className="flex gap-4 mt-4">
            <Input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
            <Button className="bg-sky-600 hover:bg-sky-700">
              <Search className="w-4 h-4 mr-2" />
              Buscar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {["torah", "neviim", "ketuvim", "britHadasha"].map(
                  (section) => (
                    <Button
                      key={section}
                      variant={
                        selectedSection === section ? "default" : "secondary"
                      }
                      className={`w-full ${
                        selectedSection === section
                          ? "bg-sky-600 hover:bg-sky-700 text-white"
                          : "bg-sky-100 hover:bg-sky-200 text-sky-900"
                      }`}
                      onClick={() => setSelectedSection(section)}
                    >
                      {section === "torah"
                        ? "Toráh"
                        : section === "neviim"
                        ? "Neviim"
                        : section === "ketuvim"
                        ? "Ketuvim"
                        : "Brit Hadashá"}
                    </Button>
                  )
                )}
              </div>
              <ScrollArea className="h-[600px] pr-4">
                {renderBookList(selectedSection)}
              </ScrollArea>
            </div>
            <div className="col-span-3">
              {selectedBook && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">
                      {selectedBook.spanish} ({selectedBook.phonetic})
                      <div dir="rtl" className="text-lg">
                        {selectedBook.hebrew}
                      </div>
                    </h2>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="secondary"
                        onClick={handlePreviousChapter}
                        disabled={selectedChapter === 1}
                        className="bg-sky-100 hover:bg-sky-200 text-sky-900"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <span className="min-w-[3rem] text-center">
                        {selectedChapter} / {chapterData.totalChapters}
                      </span>
                      <Button
                        variant="secondary"
                        onClick={handleNextChapter}
                        disabled={selectedChapter === chapterData.totalChapters}
                        className="bg-sky-100 hover:bg-sky-200 text-sky-900"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <ScrollArea className="h-[600px] p-4 border rounded-lg">
                    <div className="prose max-w-none">
                      {chapterData.content}
                    </div>
                  </ScrollArea>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BibleApp;
