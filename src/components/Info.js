import './Info.css';

export const Info = () => {
    return(
        <main className="info-main">
            <span className="info-text">
                <p>Non-Violent-Communication, also known as Compassionate Communication, 
                    is a practice developed by Marshall Rosenberg who, after studying Clinical Psychology 
                    figured there must be a better way to approach human suffering than 
                    to classify people into "crazy" and "sane", "good" and "bad".
                </p>
                <p>
                    NVC offers a clear framework for expressing <i>observations, feelings, and needs</i> and finally formulate <i>requests</i>. 
                    It's an incredibly powerful tool for conflict resolution and increasing your ability to empathise with yourself and others.
                </p>
                <p>
                Identifying needs and feelings isn't always easy. I've found Feelings and Needs cards helpful in this, you simply go through a stack of 
                    feelings and see which ones resonnate with you, then you do the same with needs. 
                </p>
                <p>
                    You can get buy cards like that online, for example on the NVC UK website:
                    &nbsp;<a href="https://nvc-uk.com/product/feelings-and-needs-card-set/">NVC UK Feelings and Needs Cards</a>.
                <br/>
                    This website can be used in a similar way, I'm still working out what feautures might be useful, it's a work in progress
                </p>
                <p>
                    Here's a Ted Talk by Maria Engels to learn more about how NVC can help built self-awareness and empathy:
                </p>
            </span>
            <span className="info-video">
                <iframe className="youtube-video" src="https://www.youtube.com/embed/cZM6ZLWm2eA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </span>
        </main>
    )
};
