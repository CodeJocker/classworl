// app/page.tsx
import Image from "next/image";

// First we need to ensure Next.js allows these domains in your next.config.js
// If you don't have this configured yet, create or update next.config.js with:
//
// module.exports = {
//   images: {
//     domains: ['images.pexels.com', 'images.unsplash.com'],
//     unoptimized: true, // Add this if images still fail to load
//   },
// }

interface Post {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
}

const posts: Post[] = [
  {
    id: "1",
    title: "Chic Spring Looks 2025",
    excerpt:
      "Step into the season with bold patterns, breezy fabrics, and the confidence to shine.",
    author: "Keza",
    date: "April 24, 2025",
    category: "Seasonal Trends",
  },
  {
    id: "2",
    title: "Paris Street Style: What's Hot",
    excerpt:
      "From oversized blazers to pointed heels, Paris has spoken. Here's what's trending.",
    author: "Keza",
    date: "April 23, 2025",
    category: "Street Style",
  },
  {
    id: "3",
    title: "Accessories That Make the Outfit",
    excerpt:
      "The right accessory can transform your look from basic to breathtaking in seconds.",
    author: "Keza",
    date: "April 22, 2025",
    category: "Accessories",
  },
];

// Using reliable placeholder images from Pexels that should work with Next.js Image component
const imageUrls: string[] = [
  "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
  "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg",
  "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
];

const galleryImages: string[] = [
  "https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg",
  "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg",
  "https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg",
  "https://images.pexels.com/photos/1485781/pexels-photo-1485781.jpeg",
];

const FashionBlogHome: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-white">
      {/* Hero Section with Glamorous Header */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-pink-500 via-purple-400 to-pink-400 flex items-center justify-center">
          <span className="text-white text-7xl">✨ FASHION ✨</span>
        </div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-extrabold text-center mb-4 tracking-tighter">
            FASHION <span className="text-pink-300">JOURNAL</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl text-center text-pink-100">
            Where style meets substance - your daily dose of fashion inspiration
          </p>
        </div>
      </div>

      {/* Featured Post Slider */}
      <div className="py-16 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            <span className="border-b-4 border-pink-400 pb-2">
              Trending Now
            </span>
          </h2>
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-pink-300"></span>
            <span className="w-3 h-3 rounded-full bg-pink-400"></span>
            <span className="w-3 h-3 rounded-full bg-pink-500"></span>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container with Category Badge */}
              <div className="relative">
                <div
                  className={`w-full h-64 ${
                    index === 0
                      ? "bg-pink-200"
                      : index === 1
                      ? "bg-purple-200"
                      : "bg-blue-200"
                  } flex items-center justify-center relative`}
                >
                  {/* Emoji fallback that will show behind image */}
                  <span className="text-5xl absolute">
                    {index === 0 ? "👗" : index === 1 ? "👠" : "👜"}
                  </span>

                  {/* Image without event handlers */}
                  <img
                    src={imageUrls[index]}
                    alt={post.title}
                    className="w-full h-full object-cover absolute inset-0"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-pink-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex justify-between items-center border-t pt-4 text-sm">
                  <span className="flex items-center text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 mr-2 flex items-center justify-center text-white text-xs">
                      {post.author.charAt(0)}
                    </div>
                    {post.author}
                  </span>
                  <span className="text-pink-500 font-medium">{post.date}</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-500 to-purple-500 py-3 px-6">
                <button className="w-full text-center text-white font-medium">
                  Read Article ✨
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Collection */}
      <div className="py-12 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-indigo-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            <span className="border-b-4 border-pink-400 pb-2">
              Editor's Picks
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <span className="text-pink-500 font-medium mb-2">SPOTLIGHT</span>
              <h3 className="text-2xl font-bold mb-4">
                Sustainable Fashion: The Future Is Now
              </h3>
              <p className="text-gray-600 mb-6">
                Discover how top designers are embracing eco-friendly materials
                and ethical production practices without compromising on style
                or luxury.
              </p>
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full self-start font-medium hover:shadow-lg transition-shadow">
                Explore More
              </button>
            </div>

            <div className="h-64 bg-gradient-to-br from-pink-200 to-purple-100 rounded-xl flex items-center justify-center">
              <span className="text-5xl">🌱👚</span>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Join Our Glamorous Newsletter
          </h3>
          <p className="mb-8 text-pink-100">
            Get weekly fashion tips, exclusive style guides, and trend
            forecasts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button className="px-8 py-3 rounded-full bg-white text-pink-500 font-medium shadow-lg hover:bg-pink-100 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FashionBlogHome;
