import ACHIEVEMENTS from "@/static-data/achievements-list";

export default function Achievments() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10">
      <div>
        <h2 className="text-4xl font-bold text-foreground text-center">
          Cool things I did
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {ACHIEVEMENTS.map((achievement) => (
          <div
            key={achievement.title}
            tabIndex={0}
            className="group relative aspect-square bg-card/50 rounded-lg p-4 hover:scale-102 focus:scale-102 transition-all duration-300 ease-in-out overflow-hidden cursor-pointer focus:outline-none"
          >
            {/* Emoji/Image and Title */}
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-4xl mb-3 group-hover:scale-110 group-focus:scale-110 transition-transform duration-300">
                {achievement.emoji && achievement.emoji}
                {achievement.image && (
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-12 h-12 object-cover rounded-xl"
                  />
                )}
              </div>
              <h3 className="text-base font-semibold text-foreground line-clamp-2 group-hover:text-primary group-focus:text-primary transition-colors">
                {achievement.title}
              </h3>
            </div>

            {/* Desktop Hover Overlay */}
            <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out items-center justify-center p-4 hidden md:flex">
              <div className="text-center">
                <div className="text-2xl mb-2 flex items-center justify-center">
                  {achievement.emoji && achievement.emoji}
                  {achievement.image && (
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-12 h-12 object-cover rounded-xl"
                    />
                  )}
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                  {achievement.description}
                </p>
              </div>
            </div>

            {/* Mobile Touch/Focus Overlay */}
            <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-focus:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center p-4 md:hidden">
              <div className="text-center">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <span className="text-sm text-muted-foreground">+ more to come...</span>
    </div>
  );
}
