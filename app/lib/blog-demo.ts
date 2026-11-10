import type { Article, Block } from "@/app/lib/blog";

const paragraph = (text: string): Block => ({
  type: "paragraph",
  children: [{ type: "text", text }],
});
const heading = (text: string): Block => ({
  type: "heading",
  level: 2,
  children: [{ type: "text", text }],
});
const list = (items: string[]): Block => ({
  type: "list",
  format: "unordered",
  children: items.map((text) => ({
    type: "list-item",
    children: [{ type: "text", text }],
  })),
});

type Example = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  introduction: string;
  sections: { title: string; text: string }[];
  checklist: string[];
};
const examples: Example[] = [
  {
    slug: "building-apis-that-grow-with-your-product",
    title: "Building APIs that grow with your product",
    excerpt:
      "Clear contracts, useful errors, and thoughtful boundaries: a practical foundation for your next backend.",
    category: "Engineering",
    date: "2026-11-06",
    introduction:
      "An API is a working agreement between teams. The decisions you make early shape how easily your product can change later. Start with the people and workflows the API needs to support, then turn those needs into explicit contracts.",
    sections: [
      {
        title: "Start with a clear contract",
        text: "Describe the inputs, outputs, and failure cases before implementing an endpoint. A frontend engineer should be able to understand an API without reading its database queries. Consistent naming and predictable response shapes reduce the amount of special handling every consumer needs to write.",
      },
      {
        title: "Design for the unhappy path",
        text: "Timeouts, invalid input, and duplicate submissions are part of normal operation. Return errors that explain what a caller can do next, and avoid exposing internal implementation details. Decide which operations can be retried safely and document those expectations alongside the successful response.",
      },
      {
        title: "Make change intentional",
        text: "Small additions are usually easier to adopt than broad rewrites. Review changes from the perspective of existing consumers and establish a migration path when a contract must change. Useful request logs and a few meaningful integration tests help the team catch regressions before customers do.",
      },
    ],
    checklist: [
      "Document response shapes and validation rules.",
      "Define pagination and access boundaries.",
      "Test the workflows consumers actually use.",
    ],
  },
  {
    slug: "from-idea-to-a-focused-mvp",
    title: "From a big idea to a focused MVP",
    excerpt:
      "Choose the smallest useful experience, validate the important assumptions, and give your first release room to learn.",
    category: "Product",
    date: "2026-11-04",
    introduction:
      "A first release does not need to express the entire ambition of a business. It needs to help a specific person finish an important task. That focus creates a clearer design brief and gives your team better questions to answer after launch.",
    sections: [
      {
        title: "Name the problem before the features",
        text: "Describe who you are helping, what they are trying to accomplish, and what makes the current process difficult. A concrete problem statement helps the team evaluate requests consistently. When a feature does not move the main workflow forward, it can wait for another iteration.",
      },
      {
        title: "Choose a complete journey",
        text: "A small release should still feel complete. Give users a sensible starting point, useful feedback while they work, and a clear outcome. Include empty states and recovery paths in the scope; those moments are part of the product experience rather than finishing touches.",
      },
      {
        title: "Decide how you will learn",
        text: "Before building, agree on what you hope to observe. Customer conversations, successful task completion, and support requests can help explain where the experience works and where it needs attention. Use that evidence to choose the next improvement instead of expanding the feature list automatically.",
      },
    ],
    checklist: [
      "Define one primary user and workflow.",
      "Write down the assumptions the release should test.",
      "Schedule a review of feedback after launch.",
    ],
  },
  {
    slug: "making-nearshore-collaboration-work",
    title: "Making nearshore feel like one team",
    excerpt:
      "Shared context matters as much as shared working hours. A few habits can make distributed collaboration more deliberate.",
    category: "Nearshore",
    date: "2026-11-02",
    introduction:
      "Working-hour overlap creates space for collaboration, but the team still needs a shared understanding of its goals. Successful distributed work depends on the everyday habits that help people make decisions together and keep each other informed.",
    sections: [
      {
        title: "Share the why",
        text: "Invite engineers into conversations about customer needs and product priorities. Understanding the purpose of a feature makes it easier to suggest a simpler implementation or notice a missing requirement. A ticket becomes more useful when it explains the intended outcome as well as the requested work.",
      },
      {
        title: "Make decisions easy to find",
        text: "Keep important decisions in a place the whole team can access. A short note explaining the options considered and the chosen direction helps people contribute without repeating the same discussion. Written context also makes handovers and onboarding less dependent on individual availability.",
      },
      {
        title: "Build a sustainable rhythm",
        text: "Agree on when to meet, where to ask questions, and how to raise blockers. Use live conversations when a problem benefits from discussion, and leave routine updates in writing when that is enough. Review the rhythm as the team and the project evolve.",
      },
    ],
    checklist: [
      "Agree on communication channels and overlap hours.",
      "Include collaborators in planning and demos.",
      "Record decisions alongside the work.",
    ],
  },
  {
    slug: "a-practical-code-review-checklist",
    title: "Better code reviews, better handoffs",
    excerpt:
      "Keep reviews focused on behavior, maintainability, and the context the next engineer will need.",
    category: "Engineering",
    date: "2026-10-29",
    introduction:
      "A code review is a conversation about how a change will behave and how the team will maintain it. Clear explanations and focused changes make that conversation easier for both the author and the reviewer.",
    sections: [
      {
        title: "Explain the resulting behavior",
        text: "Describe what triggered the change and what a user will experience afterward. Include the evidence that supports the implementation, such as a relevant test or a reproduction of the original issue. Reviewers can reason more effectively when they understand the outcome before the details.",
      },
      {
        title: "Read beyond the happy path",
        text: "Look at how the change handles missing data, invalid inputs, loading, and failures. Check the boundaries between components and services rather than reviewing each function in isolation. The most useful questions often concern assumptions shared by more than one part of the system.",
      },
      {
        title: "Make feedback actionable",
        text: "Explain the effect of a concern and give enough context for the author to address it. Separate required fixes from optional suggestions. A review should leave the team with a clearer understanding of the change and a practical path toward completing it.",
      },
    ],
    checklist: [
      "Connect the implementation to a concrete user outcome.",
      "Verify important failure and recovery paths.",
      "Keep explanations close to the code they clarify.",
    ],
  },
  {
    slug: "designing-useful-empty-states",
    title: "Empty states are part of the product",
    excerpt:
      "Help users understand what is missing, why it matters, and the next useful action they can take.",
    category: "Product",
    date: "2026-10-26",
    introduction:
      "A new account, a search without results, and a temporarily unavailable service can all produce an empty screen. They describe different situations and deserve different explanations. Good empty states give users direction without adding unnecessary friction.",
    sections: [
      {
        title: "Explain the situation",
        text: "Use language that describes what the user is seeing. An empty collection may invite someone to create their first item, while a search with no matches should help them adjust the query. Avoid using the same generic message for both situations.",
      },
      {
        title: "Offer a useful next step",
        text: "The action should match the context. Clearing filters, starting a new record, or retrying a request are different decisions. Keep the most useful action easy to find, and make sure it actually changes the state that produced the message.",
      },
      {
        title: "Include accessibility from the start",
        text: "Make controls understandable without relying on icons or color alone. Keep focus visible and ensure important status changes are announced appropriately. Test the experience with a keyboard as well as with a pointer.",
      },
    ],
    checklist: [
      "Distinguish no content, no results, and service errors.",
      "Write a clear explanation and a relevant action.",
      "Check keyboard access and status announcements.",
    ],
  },
  {
    slug: "why-we-are-starting-this-journal",
    title: "A space for ideas worth building on",
    excerpt:
      "Introducing a journal about the decisions, conversations, and small improvements behind digital products.",
    category: "Company",
    date: "2026-10-22",
    introduction:
      "Software is shaped by more than its source code. Product choices, communication habits, and the way a team learns all influence what gets built. This journal is a place to explore those connections through practical, approachable writing.",
    sections: [
      {
        title: "Close to the work",
        text: "We want to discuss decisions that teams can recognize in their own projects: choosing a manageable release, making an API easier to consume, or helping collaborators share context. Concrete situations make it easier to connect an idea with the work in front of you.",
      },
      {
        title: "Useful questions",
        text: "There is rarely one answer that suits every product. A useful article should help you ask better questions about your constraints and priorities. The aim is to explain tradeoffs clearly enough that you can make a more informed decision with your team.",
      },
      {
        title: "An ongoing conversation",
        text: "The journal will bring together perspectives on engineering, product development, and collaboration. If a topic connects with a challenge you are considering, it can become the starting point for a conversation about what to build next.",
      },
    ],
    checklist: [
      "Practical engineering ideas.",
      "Thoughtful product decisions.",
      "Clearer collaboration between teams.",
    ],
  },
];

// Local 
export const demoArticles: Article[] = examples.map((example) => ({
  documentId: "demo-" + example.slug,
  title: example.title,
  slug: example.slug,
  excerpt: example.excerpt,
  category: example.category,
  author: "Devlync Editorial",
  publishedAt: example.date + "T12:00:00.000Z",
  updatedAt: example.date + "T12:00:00.000Z",
  content: [
    paragraph(example.introduction),
    ...example.sections.flatMap((section) => [
      heading(section.title),
      paragraph(section.text),
    ]),
    heading("A starting checklist"),
    list(example.checklist),
  ],
}));
