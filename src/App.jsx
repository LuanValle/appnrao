import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  ClipboardList,
  FileText,
  LogIn,
  Mail,
  MessageCircle,
  Pencil,
  Phone,
  Plus,
  Recycle,
  ShieldCheck,
  Trash2,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";

const STORAGE_KEYS = {
  family: "appnrao-prototype-family",
  correspondence: "appnrao-prototype-correspondence",
};

const owner = { id: "owner-1", name: "Rafael Almeida", relationship: "Titular do PNR", status: "Ativo", isOwner: true };
const initialFamily = [owner, { id: "member-1", name: "Mariana Almeida", relationship: "Cônjuge", status: "Ativo" }, { id: "member-2", name: "Lucas Almeida", relationship: "Filho", status: "Ativo" }];
const initialCorrespondence = [
  { id: "mail-1", recipientId: "member-2", subject: "Encomenda registrada", date: "08/10/2026", status: "Aguardando retirada" },
  { id: "mail-2", recipientId: owner.id, subject: "Correspondência administrativa", date: "06/10/2026", status: "Retirada" },
];

const carouselItems = [
  { title: "Boas-vindas aos moradores", text: "Informações para começar bem a vida na comunidade.", image: "https://duyn491kcolsw.cloudfront.net/files/07/07o/07oeit.jpg?ph=71d32823d4" },
  { title: "Informação para as duas vilas", text: "Acesse publicações, normas e contatos em um único portal.", image: "https://71d32823d4.clvaw-cdnwnd.com/00d72076d63af9da4715f7077b47f50a/200000214-65e6966ea1/noticias%204.jpg?ph=71d32823d4" },
  { title: "Família sempre atualizada", text: "Mantenha os integrantes do seu PNR organizados no portal.", image: "https://71d32823d4.clvaw-cdnwnd.com/00d72076d63af9da4715f7077b47f50a/200002556-114e8114eb/220351773_5958803447525699_5479137345794366336_n.jpg?ph=71d32823d4" },
];

const importantLinks = [
  ["Cadastro de moradores", "Cadastro e atualização do PNR", "https://71d32823d4.clvaw-cdnwnd.com/00d72076d63af9da4715f7077b47f50a/200002556-114e8114eb/220351773_5958803447525699_5479137345794366336_n.jpg?ph=71d32823d4"],
  ["Notícias importantes", "Avisos e comunicados da Associação", "https://71d32823d4.clvaw-cdnwnd.com/00d72076d63af9da4715f7077b47f50a/200000214-65e6966ea1/noticias%204.jpg?ph=71d32823d4"],
  ["Solicitações e dúvidas", "Envie uma solicitação para a administração", "https://71d32823d4.clvaw-cdnwnd.com/00d72076d63af9da4715f7077b47f50a/200002503-1f12e1f132/images-3.jpg?ph=71d32823d4"],
];
const lawLinks = [
  ["Atas de reuniões", "Atas e Assembleias Gerais dos últimos 12 meses.", "https://71d32823d4.clvaw-cdnwnd.com/00d72076d63af9da4715f7077b47f50a/200000226-d53b0d6369/atas.jpg?ph=71d32823d4"],
  ["Publicações em vigor", "Estatuto, regimentos internos e normas.", "https://71d32823d4.clvaw-cdnwnd.com/00d72076d63af9da4715f7077b47f50a/200000227-2a5712b4f0/publica%C3%A7%C3%B5es.jpg?ph=71d32823d4"],
  ["Código Civil", "Lei nº 10.406/02.", "https://71d32823d4.clvaw-cdnwnd.com/00d72076d63af9da4715f7077b47f50a/200000019-8235c83332/Novo%20C%C3%B3digo%20Civil.jpg?ph=71d32823d4"],
];
const appnraoPhones = [["Secretaria Vila Buriti", "(92) 3618-0749", "9236180749"], ["Secretaria Vila Humaitá", "(92) 99966-6906", "92999666906"], ["Serviços Gerais", "(92) 99966-6560", "92999666560"]];
const emergencyPhones = [["Polícia Militar", "190", "190"], ["Polícia Civil", "197", "197"], ["Corpo de Bombeiros", "193", "193"], ["Defesa Civil", "199", "199"]];
const socialLinks = [
  { label: "WhatsApp Vila Buriti", href: "https://wa.me/559236180749", icon: MessageCircle },
  { label: "WhatsApp Vila Humaitá", href: "https://wa.me/5592999666906", icon: MessageCircle },
  { label: "Instagram", href: "", icon: InstagramIcon },
  { label: "Facebook", href: "", icon: FacebookIcon },
];

function InstagramIcon({ size = 17, "aria-hidden": ariaHidden }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden={ariaHidden}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>;
}

function FacebookIcon({ size = 17, "aria-hidden": ariaHidden }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden}><path d="M14 8h3V4.5c-.52-.07-1.75-.18-3.34-.18-3.3 0-5.56 2.01-5.56 5.71v3.18H5v3.91h3.1V24h3.8v-6.88h3.17l.5-3.91H11.9v-2.75c0-1.13.3-1.9 2.1-1.9Z" /></svg>;
}

function usePersistentState(key, fallback) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return fallback;
    try {
      const saved = window.localStorage.getItem(key);
      return saved ? JSON.parse(saved) : fallback;
    } catch { return fallback; }
  });
  useEffect(() => { window.localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
}

function Navigation({ page, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const closeOnDesktop = () => window.innerWidth > 1240 && setMenuOpen(false);
    const closeOnEscape = ({ key }) => key === "Escape" && setMenuOpen(false);
    window.addEventListener("resize", closeOnDesktop); document.addEventListener("keydown", closeOnEscape);
    return () => { window.removeEventListener("resize", closeOnDesktop); document.removeEventListener("keydown", closeOnEscape); };
  }, []);
  const navigate = (nextPage) => { setMenuOpen(false); onNavigate(nextPage); };
  return <header className="site-header"><div className="wrap header-inner"><button className="brand brand-button" type="button" onClick={() => navigate("home")}>APPNRAO</button><button className="mobile-menu" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="main-menu" onClick={() => setMenuOpen((open) => !open)}><span className="mobile-menu__icon" aria-hidden="true" /><span>{menuOpen ? "Fechar" : "Menu"}</span></button><nav className={`nav${menuOpen ? " open" : ""}`} id="main-menu" aria-label="Menu principal"><button className={page === "home" ? "active" : ""} type="button" onClick={() => navigate("home")}>Página inicial</button><button type="button" onClick={() => navigate("publicacoes")}>Publicações</button><button type="button" onClick={() => navigate("login")}>Entrar no portal</button><button type="button" onClick={() => navigate("portal")}>Minha família</button><button type="button" onClick={() => navigate("admin")}>Administração</button></nav></div></header>;
}

function ContactStrip() {
  return <section className="contact-strip"><div className="contact-strip__bg" /><div className="wrap contact-strip__content"><div className="socials" aria-label="Redes sociais">{socialLinks.map(({ label, href, icon: Icon }) => href ? <a href={href} key={label} aria-label={label} target="_blank" rel="noreferrer"><Icon size={17} aria-hidden="true" /></a> : <span className="socials__pending" key={label} aria-label={`${label}: link oficial pendente`} title="Link oficial ainda não informado"><Icon size={17} aria-hidden="true" /></span>)}</div><div className="contact-list"><span>Segunda a sexta, das 08h às 17h</span><a href="mailto:secretario@appnrao.com.br">secretario@appnrao.com.br</a><a href="tel:+559236180749">(92) 3618-0749</a></div></div></section>;
}

function Carousel({ onNavigate }) {
  const [active, setActive] = useState(0);
  const current = carouselItems[active];
  useEffect(() => { const timer = window.setInterval(() => setActive((index) => (index + 1) % carouselItems.length), 6000); return () => window.clearInterval(timer); }, []);
  const move = (direction) => setActive((index) => (index + direction + carouselItems.length) % carouselItems.length);
  return <section className="photo-carousel wrap" aria-label="Destaques do portal"><button className="carousel-slide" type="button" onClick={() => onNavigate("publicacoes")}><img src={current.image} alt="" /><span className="carousel-slide__shade" /><span className="carousel-slide__content"><small>Destaque do portal</small><strong>{current.title}</strong><span>{current.text}</span><em>Ver conteúdo <ChevronRight size={17} aria-hidden="true" /></em></span></button><div className="carousel-controls"><button type="button" aria-label="Destaque anterior" onClick={() => move(-1)}><ArrowLeft size={18} /></button><div className="carousel-dots" aria-label="Selecionar destaque">{carouselItems.map((item, index) => <button key={item.title} type="button" className={index === active ? "active" : ""} aria-label={`Ir para ${item.title}`} onClick={() => setActive(index)} />)}</div><button type="button" aria-label="Próximo destaque" onClick={() => move(1)}><ArrowRight size={18} /></button></div></section>;
}

function QuickActions({ onNavigate }) {
  const actions = [["Correspondências", "Consultar no portal", Mail, "portal"], ["Minha família", "Atualizar o PNR", UsersRound, "portal"], ["Publicações", "Normas e comunicados", FileText, "publicacoes"], ["Entrar no portal", "Acesso do usuário", LogIn, "login"]];
  return <section className="quick-actions wrap" aria-label="Acessos rápidos">{actions.map(([title, detail, Icon, page]) => <button className="quick-action" type="button" key={title} onClick={() => onNavigate(page)}><span className="quick-action__icon"><Icon aria-hidden="true" size={24} strokeWidth={1.8} /></span><span><strong>{title}</strong><small>{detail}</small></span><ChevronRight className="quick-action__arrow" aria-hidden="true" size={19} /></button>)}</section>;
}

function ImageLinks({ items, onNavigate }) {
  return <div className="thumb-grid">{items.map(([title, text, image]) => <button className="image-link-card" type="button" key={title} onClick={onNavigate}><img src={image} alt="" loading="lazy" /><strong>{title}</strong><span>{text}</span></button>)}</div>;
}

function PhoneDirectory({ title, entries, id }) {
  return <section className="phones" id={id}><h2>{title}</h2><div className="phone-grid">{entries.map(([name, display, number]) => <article className="phone-card" key={name}><span className="phone-card__icon"><Phone aria-hidden="true" size={21} /></span><span><strong>{name}</strong><small>{display}</small></span><a href={`tel:${number}`} aria-label={`Ligar para ${name}`}>Ligar</a></article>)}</div></section>;
}

function HomePage({ onNavigate }) {
  return <><section className="hero-video" aria-label="Apresentação da APPNRAO"><video src="https://duyn491kcolsw.cloudfront.net/files/2h/2h0/2h0lrj.mp4?ph=71d32823d4" poster="https://duyn491kcolsw.cloudfront.net/files/07/07o/07oeit.jpg?ph=71d32823d4" autoPlay muted loop playsInline /><div className="hero-video__shade" /><div className="hero-video__content"><h1>APPNRAO - Associação de Permissionários de Próprios Nacionais Residenciais da Amazônia Ocidental</h1><p>Conforto, segurança e bem-estar para a Família Naval</p></div></section><QuickActions onNavigate={onNavigate} /><Carousel onNavigate={onNavigate} /><main className="wrap main-content"><p className="updated">Protótipo de validação — experiência pública e área do morador.</p><hr /><section className="text-section"><h2>Boas-vindas aos moradores</h2><p>O portal reúne informações das Vilas Buriti e Humaitá e prepara uma experiência simples para o morador manter seus dados e sua família organizados.</p><div className="welcome-grid">{[["Minha família", "Cadastre filhos e integrantes vinculados ao seu PNR.", UsersRound], ["Correspondências", "Consulte entregas destinadas ao titular ou à família.", Mail], ["Segurança", "Acesso separado para moradores e administração.", ShieldCheck], ["Sustentabilidade", "Informações para preservar nossa comunidade.", Recycle]].map(([title, text, Icon]) => <article className="welcome-card" key={title}><Icon aria-hidden="true" size={24} strokeWidth={1.8} /><div><strong>{title}</strong><span>{text}</span></div></article>)}</div></section><hr /><section className="text-section"><h2>Atendimento aos moradores</h2><p><strong>Vila Buriti:</strong> segunda a quinta, 08:00h às 11:45h e 13:00h às 17:00h. Sextas até 16:00h.</p><p><strong>Vila Humaitá:</strong> segunda a quinta, 08:00h às 11:45h e 13:00h às 17:00h. Sextas até 16:00h.</p></section><hr /><section className="links-section" id="links-importantes"><h2>Informações importantes</h2><ImageLinks items={importantLinks} onNavigate={() => onNavigate("publicacoes")} /></section><hr /><section className="links-section"><h2>Atas, publicações, normas e leis</h2><ImageLinks items={lawLinks} onNavigate={() => onNavigate("publicacoes")} /></section><hr /><PhoneDirectory title="Telefones APPNRAO" entries={appnraoPhones} id="telefones" /><hr /><PhoneDirectory title="Telefones emergenciais" entries={emergencyPhones} /></main></>;
}

function PublicacoesPage({ onNavigate }) {
  return <main className="wrap page-content"><button className="back-link" type="button" onClick={() => onNavigate("home")}><ArrowLeft size={17} /> Voltar para o início</button><div className="page-heading"><small>Área pública</small><h1>Publicações e informações</h1><p>Conteúdos institucionais organizados para consulta dos moradores.</p></div><div className="publication-grid">{[...lawLinks, ["Comunicados", "Avisos importantes da Associação.", carouselItems[1].image]].map(([title, text, image]) => <article className="publication-card" key={title}><img src={image} alt="" /><div><small>Publicação</small><h2>{title}</h2><p>{text}</p><button type="button" onClick={() => window.alert("Este conteúdo está representado no protótipo e será conectado ao acervo real depois.")}>Visualizar resumo <ChevronRight size={17} /></button></div></article>)}</div></main>;
}

function LoginPage({ onLogin, onNavigate }) {
  return <main className="wrap page-content narrow-page"><button className="back-link" type="button" onClick={() => onNavigate("home")}><ArrowLeft size={17} /> Voltar para o início</button><div className="page-heading"><small>Protótipo de acesso</small><h1>Entrar no portal</h1><p>Escolha um perfil para demonstrar os fluxos da Associação.</p></div><div className="role-grid"><button type="button" className="role-card" onClick={() => onLogin("morador")}><UserRound size={28} /><strong>Morador titular</strong><span>Consultar família e correspondências.</span></button><button type="button" className="role-card" onClick={() => onLogin("admin")}><ShieldCheck size={28} /><strong>Administrador</strong><span>Consultar PNRs e operar a administração.</span></button></div><p className="prototype-note">Este acesso é simulado e não coleta senha. O protótipo não representa autenticação de produção.</p></main>;
}

function FamilyTree({ family, setFamily }) {
  const [form, setForm] = useState({ name: "", relationship: "Filho", status: "Ativo" });
  const [editingId, setEditingId] = useState(null);
  const submit = (event) => { event.preventDefault(); if (!form.name.trim()) return; if (editingId) setFamily((items) => items.map((item) => item.id === editingId ? { ...item, ...form, name: form.name.trim() } : item)); else setFamily((items) => [...items, { id: `member-${Date.now()}`, ...form, name: form.name.trim() }]); setForm({ name: "", relationship: "Filho", status: "Ativo" }); setEditingId(null); };
  const edit = (member) => { setEditingId(member.id); setForm({ name: member.name, relationship: member.relationship, status: member.status }); };
  const remove = (memberId) => setFamily((items) => items.filter((item) => item.id !== memberId || item.isOwner));
  return <section className="portal-section"><div className="section-heading"><div><small>Cadastro do PNR</small><h2>Minha família</h2><p>Organize os integrantes vinculados à sua residência.</p></div><span className="prototype-badge">Salvo neste navegador</span></div><div className="family-tree"><div className="family-node family-node--owner"><UserRound size={21} /><div><strong>{owner.name}</strong><span>{owner.relationship}</span></div><span className="status-pill">{owner.status}</span></div><div className="family-branch">{family.filter((member) => !member.isOwner).map((member) => <article className="family-node" key={member.id}><UserRound size={20} /><div><strong>{member.name}</strong><span>{member.relationship}</span></div><span className="status-pill">{member.status}</span><div className="node-actions"><button type="button" aria-label={`Editar ${member.name}`} onClick={() => edit(member)}><Pencil size={16} /></button><button type="button" aria-label={`Remover ${member.name}`} onClick={() => remove(member.id)}><Trash2 size={16} /></button></div></article>)}{!family.some((member) => !member.isOwner) && <p className="empty-state">Nenhum integrante cadastrado ainda.</p>}</div></div><form className="inline-form" onSubmit={submit}><label>Nome<input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Ex.: Ana Almeida" /></label><label>Parentesco<select value={form.relationship} onChange={(event) => setForm({ ...form, relationship: event.target.value })}><option>Filho</option><option>Filha</option><option>Cônjuge</option><option>Pai</option><option>Mãe</option><option>Outro integrante</option></select></label><label>Situação<select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })}><option>Ativo</option><option>Em atualização</option><option>Inativo</option></select></label><div className="form-actions"><button className="primary-button" type="submit"><Plus size={17} /> {editingId ? "Salvar alteração" : "Adicionar integrante"}</button>{editingId && <button className="quiet-button" type="button" onClick={() => { setEditingId(null); setForm({ name: "", relationship: "Filho", status: "Ativo" }); }}><X size={17} /> Cancelar</button>}</div></form></section>;
}

function CorrespondencePanel({ family, correspondence, setCorrespondence, admin = false }) {
  const [form, setForm] = useState({ recipientId: owner.id, subject: "" });
  const recipientName = (id) => family.find((member) => member.id === id)?.name || "Morador";
  const add = (event) => { event.preventDefault(); if (!form.subject.trim()) return; setCorrespondence((items) => [{ id: `mail-${Date.now()}`, recipientId: form.recipientId, subject: form.subject.trim(), date: "08/10/2026", status: "Aguardando retirada" }, ...items]); setForm({ recipientId: owner.id, subject: "" }); };
  const markCollected = (id) => setCorrespondence((items) => items.map((item) => item.id === id ? { ...item, status: "Retirada" } : item));
  return <section className="portal-section"><div className="section-heading"><div><small>{admin ? "Operação administrativa" : "Área do morador"}</small><h2>Correspondências</h2><p>{admin ? "Cadastre e atualize correspondências do PNR." : "Consulte entregas destinadas ao titular ou à família."}</p></div><span className="prototype-badge">Dados simulados</span></div>{admin && <form className="inline-form correspondence-form" onSubmit={add}><label>Destinatário<select value={form.recipientId} onChange={(event) => setForm({ ...form, recipientId: event.target.value })}>{family.map((member) => <option key={member.id} value={member.id}>{member.name} — {member.relationship}</option>)}</select></label><label>Descrição<input value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} placeholder="Ex.: Encomenda" /></label><button className="primary-button" type="submit"><Plus size={17} /> Cadastrar</button></form>}<div className="correspondence-list">{correspondence.map((item) => <article className="correspondence-card" key={item.id}><span className="correspondence-icon"><Mail size={20} /></span><div><strong>{item.subject}</strong><span>{recipientName(item.recipientId)} · cadastrada em {item.date}</span></div><span className={`status-pill ${item.status === "Retirada" ? "status-pill--done" : ""}`}>{item.status}</span>{admin && item.status !== "Retirada" && <button className="quiet-button" type="button" onClick={() => markCollected(item.id)}>Marcar retirada</button>}</article>)}{!correspondence.length && <p className="empty-state">Nenhuma correspondência encontrada.</p>}</div></section>;
}

function ResidentPortal({ family, setFamily, correspondence, setCorrespondence, onNavigate }) {
  const [section, setSection] = useState("resumo");
  const tabs = [["resumo", "Resumo"], ["familia", "Minha família"], ["correspondencias", "Correspondências"], ["notificacoes", "Notificações"]];
  return <main className="wrap page-content portal-page"><button className="back-link" type="button" onClick={() => onNavigate("home")}><ArrowLeft size={17} /> Sair da área do morador</button><div className="portal-header"><div><small>Área do morador · demonstração</small><h1>Olá, Rafael</h1><p>PNR 204 · Vila Buriti</p></div><span className="profile-chip"><UserRound size={17} /> Morador titular</span></div><div className="portal-tabs" role="tablist">{tabs.map(([value, label]) => <button key={value} type="button" className={section === value ? "active" : ""} onClick={() => setSection(value)}>{label}</button>)}</div>{section === "resumo" && <section className="portal-section"><div className="summary-grid"><button type="button" onClick={() => setSection("familia")}><UsersRound size={24} /><strong>{family.length} integrantes</strong><span>Minha família <ChevronRight size={16} /></span></button><button type="button" onClick={() => setSection("correspondencias")}><Mail size={24} /><strong>{correspondence.filter((item) => item.status !== "Retirada").length} aguardando</strong><span>Correspondências <ChevronRight size={16} /></span></button><button type="button" onClick={() => setSection("notificacoes")}><ClipboardList size={24} /><strong>2 avisos</strong><span>Notificações <ChevronRight size={16} /></span></button></div><div className="notice-panel"><ShieldCheck size={23} /><div><strong>Seu cadastro está protegido no protótipo</strong><p>Os dados desta demonstração ficam somente neste navegador e não representam um cadastro real.</p></div></div></section>}{section === "familia" && <FamilyTree family={family} setFamily={setFamily} />}{section === "correspondencias" && <CorrespondencePanel family={family} correspondence={correspondence} setCorrespondence={setCorrespondence} />}{section === "notificacoes" && <section className="portal-section"><div className="section-heading"><div><small>Central de avisos</small><h2>Notificações</h2><p>Mensagens simuladas para a apresentação do protótipo.</p></div></div><div className="notification-list"><article><span className="notification-dot" /><div><strong>Cadastro familiar disponível</strong><p>Você pode manter filhos e integrantes do PNR atualizados.</p><small>Hoje</small></div></article><article><span className="notification-dot notification-dot--muted" /><div><strong>Bem-vindo ao portal</strong><p>Consulte informações da Vila Buriti e mantenha seus dados organizados.</p><small>08/10/2026</small></div></article></div></section>}</main>;
}

function AdminPortal({ family, setFamily, correspondence, setCorrespondence, onNavigate }) {
  const [section, setSection] = useState("moradores");
  return <main className="wrap page-content portal-page"><button className="back-link" type="button" onClick={() => onNavigate("home")}><ArrowLeft size={17} /> Sair da administração</button><div className="portal-header"><div><small>Área administrativa · demonstração</small><h1>Painel da Associação</h1><p>Visão de operação das duas vilas</p></div><span className="profile-chip"><ShieldCheck size={17} /> Administrador</span></div><div className="portal-tabs" role="tablist"><button type="button" className={section === "moradores" ? "active" : ""} onClick={() => setSection("moradores")}>Moradores e PNRs</button><button type="button" className={section === "correspondencias" ? "active" : ""} onClick={() => setSection("correspondencias")}>Correspondências</button></div>{section === "moradores" && <><section className="portal-section"><div className="section-heading"><div><small>Consulta cadastral</small><h2>Moradores e composição familiar</h2><p>O administrador visualiza a estrutura cadastrada de cada PNR.</p></div></div><article className="admin-resident-card"><div className="admin-resident-card__heading"><span className="avatar"><UserRound size={21} /></span><div><strong>Rafael Almeida</strong><span>PNR 204 · Vila Buriti · Titular</span></div><span className="status-pill">Cadastro ativo</span></div><div className="admin-family-preview">{family.map((member) => <span key={member.id}><UserRound size={15} /> {member.name} <small>{member.relationship}</small></span>)}</div></article></section><FamilyTree family={family} setFamily={setFamily} /></>}{section === "correspondencias" && <CorrespondencePanel family={family} correspondence={correspondence} setCorrespondence={setCorrespondence} admin />}</main>;
}

function Footer({ onNavigate }) {
  return <footer className="footer"><div className="wrap footer-grid"><div className="footer-brand"><div><h2>APPNRAO</h2><p>Conforto, segurança e bem-estar para a Família Naval.</p></div></div><div><h3>Contato</h3><a href="mailto:secretario@appnrao.com.br"><Mail size={17} aria-hidden="true" /> secretario@appnrao.com.br</a><a href="tel:+559236180749"><Phone size={17} aria-hidden="true" /> (92) 3618-0749</a></div><div><h3>Acesso rápido</h3><button type="button" onClick={() => onNavigate("home")}>Página inicial</button><button type="button" onClick={() => onNavigate("publicacoes")}>Publicações</button><button type="button" onClick={() => onNavigate("login")}>Entrar no portal</button></div><div><h3>Endereço</h3><p>Rua Rio Itaquai, s/n<br />Vila Buriti — Manaus, AM</p></div></div><div className="footer-bottom"><p>2026 — Protótipo do Portal da Associação das Vilas da Marinha</p></div></footer>;
}

export default function App() {
  const [page, setPage] = useState("home");
  const [family, setFamily] = usePersistentState(STORAGE_KEYS.family, initialFamily);
  const [correspondence, setCorrespondence] = usePersistentState(STORAGE_KEYS.correspondence, initialCorrespondence);
  const navigate = (nextPage) => { setPage(nextPage); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const content = useMemo(() => { if (page === "publicacoes") return <PublicacoesPage onNavigate={navigate} />; if (page === "login") return <LoginPage onLogin={(role) => navigate(role === "admin" ? "admin" : "portal")} onNavigate={navigate} />; if (page === "portal") return <ResidentPortal family={family} setFamily={setFamily} correspondence={correspondence} setCorrespondence={setCorrespondence} onNavigate={navigate} />; if (page === "admin") return <AdminPortal family={family} setFamily={setFamily} correspondence={correspondence} setCorrespondence={setCorrespondence} onNavigate={navigate} />; return <HomePage onNavigate={navigate} />; }, [page, family, correspondence]);
  return <div className="site-shell" id="inicio"><ContactStrip /><Navigation page={page} onNavigate={navigate} />{content}<Footer onNavigate={navigate} /></div>;
}
