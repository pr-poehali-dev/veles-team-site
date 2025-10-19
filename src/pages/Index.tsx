import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const teamStats = [
    { label: "Побед", value: 18, trend: "+3" },
    { label: "Голов забито", value: 87, trend: "+12" },
    { label: "Матчей сыграно", value: 32, trend: "" },
    { label: "Место в таблице", value: 3, trend: "+1" },
  ];

  const nextMatch = {
    opponent: "ХК Торпедо",
    opponentLogo: "🚢",
    date: "25 октября",
    time: "19:00",
    arena: "Ледовый дворец «Велес»",
    live: false,
  };

  const lastResults = [
    { opponent: "Спартак", home: "4", away: "2", status: "win", date: "20.10" },
    { opponent: "Динамо", home: "3", away: "3", status: "draw", date: "18.10" },
    { opponent: "ЦСКА", home: "2", away: "5", status: "loss", date: "15.10" },
    { opponent: "Локомотив", home: "5", away: "1", status: "win", date: "12.10" },
  ];

  const schedule = [
    { date: "25 окт", time: "19:00", opponent: "Торпедо", location: "Дома", tickets: true },
    { date: "28 окт", time: "18:30", opponent: "Авангард", location: "В гостях", tickets: false },
    { date: "01 ноя", time: "19:00", opponent: "Локомотив", location: "Дома", tickets: true },
    { date: "05 ноя", time: "20:00", opponent: "СКА", location: "В гостях", tickets: false },
    { date: "08 ноя", time: "19:30", opponent: "Металлург", location: "Дома", tickets: true },
  ];

  const standings = [
    { pos: 1, team: "Авангард", played: 32, wins: 22, draws: 5, losses: 5, points: 71 },
    { pos: 2, team: "СКА", played: 32, wins: 21, draws: 4, losses: 7, points: 67 },
    { pos: 3, team: "Велес", played: 32, wins: 18, draws: 8, losses: 6, points: 62, highlight: true },
    { pos: 4, team: "ЦСКА", played: 32, wins: 17, draws: 6, losses: 9, points: 57 },
    { pos: 5, team: "Спартак", played: 32, wins: 16, draws: 5, losses: 11, points: 53 },
  ];

  const topScorers = [
    { name: "Иванов Алексей", position: "Н", goals: 15, assists: 12, points: 27 },
    { name: "Петров Сергей", position: "Н", goals: 12, assists: 14, points: 26 },
    { name: "Смирнов Дмитрий", position: "З", goals: 8, assists: 18, points: 26 },
  ];

  const newsItems = [
    { title: "Уверенная победа над Спартаком со счётом 4:2", date: "21 октября 2024", category: "Матчи" },
    { title: "Команда провела открытую тренировку для болельщиков", date: "19 октября 2024", category: "События" },
    { title: "Подписан контракт с нападающим из ВХЛ", date: "17 октября 2024", category: "Трансферы" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-ice to-ice-dark rounded-full flex items-center justify-center text-white font-black text-xl">
                В
              </div>
              <div>
                <div className="font-heading font-bold text-lg leading-tight">ХК ВЕЛЕС</div>
                <div className="text-xs text-muted-foreground">REKJHL • 5 сезон</div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-1">
              {[
                { id: "home", label: "Главная" },
                { id: "matches", label: "Матчи" },
                { id: "standings", label: "Турнирная таблица" },
                { id: "team", label: "Команда" },
                { id: "stats", label: "Статистика" },
                { id: "news", label: "Новости" },
                { id: "live", label: "Трансляции" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            <Button size="sm" className="bg-secondary hover:bg-secondary/90">
              <Icon name="Video" size={16} className="mr-2" />
              LIVE
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {activeTab === "home" && (
          <div className="space-y-6 animate-fade-in">
            <section className="relative overflow-hidden rounded-xl bg-gradient-to-r from-ice via-primary to-fire h-[420px] flex items-center justify-center text-white">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center px-4">
                <Badge className="mb-4 bg-white/20 text-white border-0 backdrop-blur-sm">
                  Сезон 2024/2025
                </Badge>
                <h1 className="text-7xl font-heading font-black mb-3 tracking-tight">
                  ХОККЕЙНЫЙ КЛУБ<br />ВЕЛЕС
                </h1>
                <p className="text-xl font-medium mb-6 opacity-90">
                  5 сезон REKJHL (ФНЛ-2)
                </p>
                <div className="flex gap-3 justify-center">
                  <Button size="lg" className="bg-white text-ice hover:bg-white/90">
                    <Icon name="Calendar" className="mr-2" size={18} />
                    Купить билеты
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Icon name="Users" className="mr-2" size={18} />
                    Состав команды
                  </Button>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {teamStats.map((stat, idx) => (
                <Card key={idx} className="hover-lift cursor-pointer border-l-4 border-l-ice">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                      {stat.trend && (
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 border-0">
                          {stat.trend}
                        </Badge>
                      )}
                    </div>
                    <div className="text-4xl font-heading font-black text-foreground">
                      {stat.value}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 border-2 shadow-lg">
                <CardHeader className="border-b bg-muted/30">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Icon name="Calendar" className="text-ice" size={22} />
                    Ближайший матч
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-ice/5 to-secondary/5 rounded-lg p-8 border-2 border-dashed border-ice/30">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-center flex-1">
                        <div className="w-24 h-24 mx-auto mb-3 bg-gradient-to-br from-ice to-ice-dark rounded-full flex items-center justify-center text-white font-black text-4xl shadow-lg">
                          В
                        </div>
                        <div className="font-heading font-bold text-2xl">Велес</div>
                        <div className="text-sm text-muted-foreground">Хозяева</div>
                      </div>

                      <div className="text-center px-6">
                        <div className="text-6xl font-black text-foreground mb-2">VS</div>
                        <div className="text-sm font-medium text-muted-foreground">
                          {nextMatch.date}
                        </div>
                        <div className="text-xl font-bold text-ice">{nextMatch.time}</div>
                      </div>

                      <div className="text-center flex-1">
                        <div className="w-24 h-24 mx-auto mb-3 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center text-white text-5xl shadow-lg">
                          {nextMatch.opponentLogo}
                        </div>
                        <div className="font-heading font-bold text-2xl">{nextMatch.opponent}</div>
                        <div className="text-sm text-muted-foreground">Гости</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-6 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" size={18} className="text-ice" />
                        <span className="font-medium">{nextMatch.arena}</span>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-3 justify-center">
                      <Button className="bg-ice hover:bg-ice-dark">
                        <Icon name="Ticket" className="mr-2" size={16} />
                        Купить билет
                      </Button>
                      <Button variant="outline" onClick={() => setActiveTab("live")}>
                        <Icon name="Video" className="mr-2" size={16} />
                        Смотреть онлайн
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader className="border-b bg-muted/30">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BarChart3" className="text-secondary" size={20} />
                    Последние матчи
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    {lastResults.map((match, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors border"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <Badge
                            className={`w-8 h-8 flex items-center justify-center rounded font-bold ${
                              match.status === "win"
                                ? "bg-green-500 text-white"
                                : match.status === "loss"
                                ? "bg-red-500 text-white"
                                : "bg-gray-400 text-white"
                            }`}
                          >
                            {match.status === "win" ? "В" : match.status === "loss" ? "П" : "Н"}
                          </Badge>
                          <div>
                            <div className="font-semibold text-sm">vs {match.opponent}</div>
                            <div className="text-xs text-muted-foreground">{match.date}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold">
                            {match.home}:{match.away}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardHeader className="border-b bg-muted/30">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Trophy" className="text-ice" size={20} />
                    Лучшие бомбардиры команды
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    {topScorers.map((player, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 border transition-colors"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ice to-ice-dark flex items-center justify-center text-white font-black text-lg">
                            {idx + 1}
                          </div>
                          <div>
                            <div className="font-semibold">{player.name}</div>
                            <Badge variant="outline" className="text-xs">{player.position}</Badge>
                          </div>
                        </div>
                        <div className="flex gap-4 text-center">
                          <div>
                            <div className="text-xl font-bold text-ice">{player.goals}</div>
                            <div className="text-xs text-muted-foreground">Г</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold text-ice">{player.assists}</div>
                            <div className="text-xs text-muted-foreground">П</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold">{player.points}</div>
                            <div className="text-xs text-muted-foreground">О</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader className="border-b bg-muted/30">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Newspaper" className="text-secondary" size={20} />
                    Последние новости
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {newsItems.map((news, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-lg hover:bg-muted/50 border transition-colors cursor-pointer hover-lift"
                      >
                        <Badge className="mb-2 bg-ice/10 text-ice border-ice/20">
                          {news.category}
                        </Badge>
                        <h3 className="font-semibold mb-1 leading-tight">{news.title}</h3>
                        <p className="text-xs text-muted-foreground">{news.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "matches" && (
          <div className="space-y-6 animate-fade-in">
            <Card className="border-2">
              <CardHeader className="border-b bg-muted/30">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calendar" className="text-ice" size={22} />
                  Расписание матчей
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {schedule.map((match, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-5 rounded-lg border-2 hover:border-ice transition-all hover-lift bg-card"
                    >
                      <div className="flex items-center gap-6">
                        <div className="text-center min-w-[80px]">
                          <div className="text-2xl font-bold text-ice">{match.date.split(" ")[0]}</div>
                          <div className="text-sm text-muted-foreground">{match.date.split(" ")[1]}</div>
                          <div className="text-xs font-semibold text-foreground mt-1">{match.time}</div>
                        </div>
                        <div>
                          <div className="font-heading font-bold text-xl mb-1">
                            Велес — {match.opponent}
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="MapPin" size={14} className="text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{match.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {match.tickets && (
                          <Button className="bg-ice hover:bg-ice-dark">
                            <Icon name="Ticket" className="mr-2" size={16} />
                            Билеты
                          </Button>
                        )}
                        <Button variant="outline">
                          <Icon name="Info" size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "standings" && (
          <div className="animate-fade-in">
            <Card className="border-2">
              <CardHeader className="border-b bg-muted/30">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Table" className="text-ice" size={22} />
                  Турнирная таблица REKJHL
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr className="border-b">
                        <th className="text-left p-4 font-heading text-sm">#</th>
                        <th className="text-left p-4 font-heading text-sm">Команда</th>
                        <th className="text-center p-4 font-heading text-sm">И</th>
                        <th className="text-center p-4 font-heading text-sm">В</th>
                        <th className="text-center p-4 font-heading text-sm">Н</th>
                        <th className="text-center p-4 font-heading text-sm">П</th>
                        <th className="text-center p-4 font-heading text-sm font-bold">О</th>
                      </tr>
                    </thead>
                    <tbody>
                      {standings.map((team) => (
                        <tr
                          key={team.pos}
                          className={`border-b transition-colors ${
                            team.highlight
                              ? "bg-ice/10 border-l-4 border-l-ice font-semibold"
                              : "hover:bg-muted/30"
                          }`}
                        >
                          <td className="p-4 text-center">
                            <Badge variant={team.pos <= 3 ? "default" : "outline"} className="w-8 h-8 flex items-center justify-center rounded-full">
                              {team.pos}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ice to-ice-dark flex items-center justify-center text-white text-xs font-bold">
                                {team.team.charAt(0)}
                              </div>
                              <span className="font-semibold">{team.team}</span>
                            </div>
                          </td>
                          <td className="p-4 text-center">{team.played}</td>
                          <td className="p-4 text-center text-green-600 font-semibold">{team.wins}</td>
                          <td className="p-4 text-center text-gray-600">{team.draws}</td>
                          <td className="p-4 text-center text-red-600 font-semibold">{team.losses}</td>
                          <td className="p-4 text-center">
                            <span className="text-xl font-bold text-ice">{team.points}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "live" && (
          <div className="space-y-6 animate-fade-in">
            <Card className="border-2">
              <CardHeader className="border-b bg-muted/30">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Video" className="text-secondary" size={22} />
                  Онлайн трансляции матчей
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-ice/10 to-secondary/10 rounded-xl flex items-center justify-center border-2 border-dashed border-ice/30 mb-6">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-ice/20 flex items-center justify-center animate-pulse">
                      <Icon name="Play" className="text-ice" size={48} />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-2">
                      Трансляция начнётся в 19:00
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Велес — Торпедо • {nextMatch.date}
                    </p>
                    <Button className="bg-secondary hover:bg-secondary/90">
                      <Icon name="Bell" className="mr-2" size={18} />
                      Напомнить о начале
                    </Button>
                  </div>
                </div>

                <Tabs defaultValue="upcoming" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="upcoming">Предстоящие</TabsTrigger>
                    <TabsTrigger value="archive">Архив трансляций</TabsTrigger>
                  </TabsList>

                  <TabsContent value="upcoming" className="space-y-3">
                    {schedule.slice(0, 3).map((match, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 rounded-lg border-2 hover:border-ice transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-center min-w-[70px]">
                            <div className="font-bold text-ice">{match.date}</div>
                            <div className="text-sm text-muted-foreground">{match.time}</div>
                          </div>
                          <div>
                            <div className="font-semibold">Велес — {match.opponent}</div>
                            <Badge variant="outline" className="text-xs mt-1">
                              {match.location}
                            </Badge>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Icon name="Bell" className="mr-2" size={14} />
                          Напомнить
                        </Button>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="archive">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {lastResults.map((match, idx) => (
                        <div
                          key={idx}
                          className="group cursor-pointer hover-lift"
                        >
                          <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center mb-3 border-2 group-hover:border-ice transition-colors">
                            <Icon
                              name="Play"
                              className="text-ice opacity-60 group-hover:opacity-100 transition-opacity"
                              size={48}
                            />
                          </div>
                          <div className="font-semibold mb-1">
                            Велес — {match.opponent} • {match.home}:{match.away}
                          </div>
                          <div className="text-sm text-muted-foreground">{match.date}</div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-card border-t mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-ice to-ice-dark rounded-full flex items-center justify-center text-white font-black">
                  В
                </div>
                <span className="font-heading font-bold text-lg">ХК Велес</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Хоккейный клуб, участник 5 сезона REKJHL (ФНЛ-2)
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Разделы</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="hover:text-ice cursor-pointer transition-colors">О клубе</div>
                <div className="hover:text-ice cursor-pointer transition-colors">Команда</div>
                <div className="hover:text-ice cursor-pointer transition-colors">Билеты</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@veles-hockey.ru
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Социальные сети</h4>
              <div className="flex gap-3">
                {["MessageCircle", "Instagram", "Youtube"].map((icon) => (
                  <div
                    key={icon}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-ice hover:text-white flex items-center justify-center cursor-pointer transition-colors"
                  >
                    <Icon name={icon as any} size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
            © 2024 ХК Велес. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
