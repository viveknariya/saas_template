import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getMetadataSitemap } from "@/lib/seo";

const seoData = getMetadataSitemap("/blogs/what-is-vector-database");

export async function generateMetadata() {
  return seoData.metaData;
}

export default function WhatIsVectorDatabase() {
  return (
    <main className="container mx-auto scroll-smooth">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Column 1: TOC */}
        <aside className="md:col-span-3 order-1 md:order-1 hidden md:block">
          <nav
            aria-label="Table of contents"
            className="sticky top-20 border border-primary rounded-lg"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  {seoData.metaData.title as string}
                </CardTitle>
                <CardDescription className="text-lg">
                  Jump to any section
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-2 text-xl">
                  <li>
                    <a
                      href="#introduction"
                      className="hover:underline hover:text-primary hover:underline-offset-4"
                    >
                      1. Introduction
                    </a>
                  </li>
                  <li>
                    <a
                      href="#how-vector-databases-work"
                      className="hover:underline hover:text-primary hover:underline-offset-4"
                    >
                      2. How Vector Databases Work
                    </a>
                  </li>
                  <li>
                    <a
                      href="#key-features"
                      className="hover:underline hover:text-primary hover:underline-offset-4"
                    >
                      3. Key Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#use-cases"
                      className="hover:underline hover:text-primary hover:underline-offset-4"
                    >
                      4. Real-World Use Cases
                    </a>
                  </li>
                  <li>
                    <a
                      href="#popular-solutions"
                      className="hover:underline hover:text-primary hover:underline-offset-4"
                    >
                      5. Popular Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#benefits-challenges"
                      className="hover:underline hover:text-primary hover:underline-offset-4"
                    >
                      6. Benefits & Challenges
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </nav>
        </aside>

        {/* Column 2: Blog Content */}
        <article className="md:col-span-6 order-2 md:order-2 flex flex-col gap-8 md:p-0 p-4">
          {/* Hero Image */}
          <figure>
            <Image
              width={1200}
              height={1200}
              src="/logo.png"
              alt="What is Vector Database"
              className="object-cover rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 w-full h-auto"
              priority={true}
            />
            <figcaption className="text-sm text-gray-600 mt-2">
              Vector databases store and search high-dimensional vectors for AI
              and machine learning applications.
            </figcaption>
          </figure>

          {/* Introduction Section */}
          <section id="introduction" className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold">Introduction</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              A vector database is a specialized type of database designed to
              store, index, and query high-dimensional vectors efficiently.
              Unlike traditional relational databases that work with structured
              data like numbers and text, vector databases are optimized for
              semantic search and similarity matching.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              In the era of artificial intelligence and machine learning, vector
              databases have become essential infrastructure. They power modern
              AI applications by enabling fast similarity searches across
              millions of vector embeddings, which are numerical representations
              of text, images, audio, and other data types.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              The rise of large language models (LLMs) and embedding models has
              made vector databases indispensable for building intelligent
              applications like recommendation systems, semantic search engines,
              and AI chatbots with long-term memory.
            </p>
          </section>

          {/* How Vector Databases Work */}
          <section
            id="how-vector-databases-work"
            className="flex flex-col gap-2"
          >
            <h2 className="text-3xl font-semibold">
              How Vector Databases Work
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Vector databases operate on a fundamentally different principle
              than traditional databases. Instead of storing rows and columns,
              they store dense numerical representations called vectors,
              typically in the form of arrays with hundreds or thousands of
              dimensions.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-4">
              <h3 className="font-semibold text-lg mb-4">
                The Vector Database Workflow:
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Vectorization:</strong> Raw data (text, images,
                  documents) is converted into vectors using embedding models.
                </li>
                <li>
                  <strong>Storage:</strong> Vectors are stored in the database
                  along with metadata and the original data.
                </li>
                <li>
                  <strong>Indexing:</strong> Advanced indexing techniques (like
                  HNSW, IVF, or LSH) create efficient data structures for fast
                  retrieval.
                </li>
                <li>
                  <strong>Query:</strong> User queries are vectorized using the
                  same embedding model.
                </li>
                <li>
                  <strong>Similarity Search:</strong> The database finds the
                  most similar vectors using distance metrics like cosine
                  similarity or Euclidean distance.
                </li>
                <li>
                  <strong>Retrieval:</strong> Top matching results are returned,
                  ranked by relevance score.
                </li>
              </ol>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed">
              This approach enables semantic understanding rather than keyword
              matching. For example, a query for "best hiking boots" will find
              results related to mountain gear and footwear, not just pages
              containing those exact words.
            </p>
          </section>

          {/* Key Features Section */}
          <section id="key-features" className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold">
              Key Features of Vector Databases
            </h2>

            <Card className="border border-gray-200 mt-4">
              <CardHeader>
                <CardTitle className="text-xl">
                  High-Dimensional Vector Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Vector databases can efficiently handle vectors with hundreds
                  or thousands of dimensions, which is essential for modern
                  embedding models like OpenAI's embeddings or sentence
                  transformers.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl">
                  Fast Similarity Search
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Using advanced indexing algorithms, vector databases can find
                  similar vectors in milliseconds, even across millions or
                  billions of vectors, making real-time applications possible.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl">Scalability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Modern vector databases are built for distributed systems,
                  allowing them to scale horizontally across multiple nodes to
                  handle massive datasets.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl">
                  Hybrid Search Capabilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Many vector databases support combining vector search with
                  traditional filtering, allowing you to search by semantic
                  similarity while also filtering by metadata, dates,
                  categories, and other structured data.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl">Multi-Vector Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Advanced vector databases can store and search multiple
                  vectors per item, useful for multi-modal data like images with
                  text descriptions.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl">
                  ACID Compliance (Optional)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Some vector databases offer ACID guarantees, ensuring data
                  consistency and reliability for production applications.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Use Cases Section */}
          <section id="use-cases" className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold">Real-World Use Cases</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">Semantic Search</h3>
                <p className="text-gray-700">
                  Search through documents, articles, or web pages by meaning
                  rather than exact keywords. Users can search for concepts and
                  get results about related topics.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">
                  Recommendation Systems
                </h3>
                <p className="text-gray-700">
                  Find similar products, movies, songs, or content based on user
                  preferences and historical behavior by comparing user and item
                  embeddings.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">
                  AI-Powered Chatbots & Retrieval-Augmented Generation (RAG)
                </h3>
                <p className="text-gray-700">
                  Store company documents or knowledge bases as vectors, then
                  retrieve relevant context when answering user questions with
                  LLMs.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">
                  Image & Video Search
                </h3>
                <p className="text-gray-700">
                  Find visually similar images or video clips by comparing their
                  embeddings, enabling reverse image search and content
                  discovery.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">
                  Anomaly Detection
                </h3>
                <p className="text-gray-700">
                  Identify unusual patterns or outliers in high-dimensional data
                  by measuring their distance from normal vector clusters.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">
                  Duplicate Detection
                </h3>
                <p className="text-gray-700">
                  Find duplicate or near-duplicate content across large datasets
                  by comparing vector similarities.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">
                  Person Re-identification
                </h3>
                <p className="text-gray-700">
                  In video surveillance or security applications, identify the
                  same person across multiple camera feeds by comparing facial
                  or gait embeddings.
                </p>
              </div>
            </div>
          </section>

          {/* Popular Solutions Section */}
          <section id="popular-solutions" className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold">
              Popular Vector Database Solutions
            </h2>

            <div className="space-y-4 mt-4">
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Pinecone</CardTitle>
                  <CardDescription>
                    Fully managed vector database as a service
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">
                    A cloud-native, fully managed vector database with built-in
                    serverless operations. No infrastructure to manage, instant
                    scaling, and competitive pricing.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Best for:</strong> Teams wanting a managed solution
                    without operational overhead.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Weaviate</CardTitle>
                  <CardDescription>Open-source vector database</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">
                    An open-source vector database written in Go, supporting
                    both on-premise and cloud deployment. Offers GraphQL API and
                    hybrid search capabilities.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Best for:</strong> Organizations wanting open-source
                    flexibility and self-hosting options.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Milvus</CardTitle>
                  <CardDescription>
                    Open-source vector database by Zilliz
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">
                    A high-performance open-source vector database designed for
                    similarity search and AI applications. Highly scalable with
                    distributed architecture.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Best for:</strong> Large-scale AI applications
                    requiring extreme performance and scalability.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Qdrant</CardTitle>
                  <CardDescription>
                    Open-source vector database written in Rust
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">
                    A Rust-based vector database emphasizing performance and
                    memory efficiency. Offers both REST and gRPC APIs with
                    filtering and payload storage.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Best for:</strong> Performance-critical applications
                    and edge deployments.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Chroma</CardTitle>
                  <CardDescription>Lightweight vector database</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">
                    A lightweight, open-source vector database optimized for
                    easy integration with Python applications. Great for
                    prototyping and small-scale projects.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Best for:</strong> Python developers building small
                    to medium-scale projects and prototypes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">
                    PostgreSQL with pgvector
                  </CardTitle>
                  <CardDescription>Extension for PostgreSQL</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">
                    An extension that adds vector search capabilities to
                    PostgreSQL, allowing you to store and search vectors
                    alongside traditional relational data.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Best for:</strong> Teams already using PostgreSQL
                    who need vector search without managing another database.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Elasticsearch with Vector Search
                  </CardTitle>
                  <CardDescription>Enterprise search platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">
                    Elasticsearch added native vector search capabilities,
                    combining full-text search with semantic search in one
                    platform.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Best for:</strong> Organizations using Elasticsearch
                    for search infrastructure wanting vector capabilities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Benefits & Challenges Section */}
          <section id="benefits-challenges" className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold">Benefits & Challenges</h2>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <Card className="border border-green-200 bg-green-50/50">
                <CardHeader>
                  <CardTitle className="text-lg text-green-900">
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>
                        Semantic understanding beyond keyword matching
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Extremely fast similarity search at scale</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Perfect for AI/ML applications and LLMs</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Flexible and language-agnostic embeddings</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>
                        Many open-source and managed options available
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-orange-200 bg-orange-50/50">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-900">
                    Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>
                        Learning curve and paradigm shift from SQL databases
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>Quality depends on the embedding model used</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>Embedding costs can add up at scale</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>Debugging similarity results is more complex</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>
                        Still a relatively new ecosystem with evolving best
                        practices
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mt-6">
              Despite the challenges, vector databases have become a cornerstone
              of modern AI infrastructure. As embedding models improve and costs
              decrease, their adoption will continue to grow across industries.
            </p>
          </section>

          {/* Conclusion */}
          <section className="flex flex-col gap-2 bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h2 className="text-2xl font-semibold">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              Vector databases represent a fundamental shift in how we store and
              retrieve information. By leveraging embeddings and similarity
              search, they enable a new generation of AI-powered applications
              that understand meaning and context, not just keywords. Whether
              you're building a recommendation system, an AI chatbot with
              memory, or a semantic search engine, vector databases are likely
              to be a critical component of your tech stack.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The choice of which vector database to use depends on your
              specific needs—whether you prefer managed services, open-source
              flexibility, or integration with existing databases—but the
              technology itself has proven to be indispensable in the era of AI.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
