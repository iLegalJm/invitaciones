import React, { useState } from 'react';
import { Hero } from './components/sections/Hero';
import { Countdown } from './components/sections/Countdown';
import { Gallery } from './components/sections/Gallery';
import { Timeline } from './components/sections/Timeline';
import { RSVPForm } from './components/sections/RSVPForm';
import { MapSection } from './components/sections/MapSection';
import { BackgroundMusic } from './components/common/BackgroundMusic';
import { WelcomeCover } from './components/sections/WelcomeCover';
import { invitationData } from './config/invitationData';
import { useAudio } from './hooks/useAudio';

function App() {
    const [hasOpened, setHasOpened] = useState(false);
    const [isPlaying, toggleMusic] = useAudio(invitationData.features.music.url);

    const handleOpen = () => {
        setHasOpened(true);
        if (!isPlaying) toggleMusic();
    };

    if (!invitationData || !invitationData.event) {
        return (
            <div className="h-screen flex items-center justify-center bg-wedding-secondary">
                <p className="text-wedding-gold font-serif text-xl animate-pulse">Cargando invitación...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-wedding-secondary text-wedding-accent font-sans selection:bg-wedding-gold selection:text-white">
            <WelcomeCover eventData={invitationData.event} onOpen={handleOpen} />

            <Hero data={invitationData.event} />

            <main className="max-w-screen-xl mx-auto">
                <Countdown targetDate={invitationData.event.date.iso} labels={invitationData.features.countdown.labels} />

                <Gallery photos={invitationData.features.gallery || []} />

                <Timeline events={invitationData.features.story || []} />

                <MapSection locations={[
                    invitationData.event.location.ceremony,
                    invitationData.event.location.party
                ]} />

                <RSVPForm
                    rsvpConfig={invitationData.features.rsvp}
                    eventData={invitationData.event}
                />
            </main>

            {hasOpened && (
                <BackgroundMusic
                    isPlaying={isPlaying}
                    onToggle={toggleMusic}
                />
            )}
        </div>
    );
}

export default App;
