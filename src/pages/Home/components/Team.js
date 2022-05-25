import React from 'react';
import {Grid} from "@material-ui/core";

const CardMember = (props) => {
    const {name} = props
    const {family} = props
    const {job} = props

    console.log(name, family, job)

    return (
        <div className={"cardMember"}>
            <div className={"cardMemberNameContainer"}>{family} {name}
            </div>
            <div className={"cardMemberJobContainer"}>
                {job}
            </div>

        </div>
    );
};


const Team = () => {
    return (
        <section style={{display: "flex", justifyContent: "center"}}>
            <Grid spacing={2} style={{display: "flex", justifyContent: "center",alignItems: 'center'}}>
                <Grid item xs={3} xm={3} md={4}>
                    <CardMember name={"Meyrueis"}
                                family={'De-Jurquet'}
                                job={"DEV Full stack"}
                    />
                </Grid>

                <Grid item xs={3} xm={3} md={4}>
                    <CardMember name={"Thibault"}
                                family={'Blaise'}
                                job={"DEV Front-End"}
                    />
                </Grid>
                <Grid item xs={3} xm={3} md={4}>
                    <CardMember name={"Mohamed Riadh"}
                                family={'Ghellab'}
                                job={"DEV Front-End"}
                    />
                </Grid>
                <Grid item xs={3} xm={3} md={4}>
                    <CardMember name={"Nathan"}
                                family={'Barre'}
                                job={"DEV Back-End"}
                    />
                </Grid>

            </Grid>
            <Grid spacing={2} style={{width: "600px",display: "flex", justifyContent: "center",alignItems: 'center'}}>
                <Grid item xs={3} xm={3} md={4}>
                    <CardMember name={"Antoine"}
                                family={'Duplaa'}
                                job={"DEV Front-End"}
                    />
                </Grid>

                <Grid item xs={3} xm={3} md={4}>
                    <CardMember name={"Adrien"}
                                family={'Pilet'}
                                job={"DEV Back-End"}
                    />
                </Grid>
                <Grid item xs={3} xm={3} md={4}>
                    <CardMember name={"Hugo"}
                                family={'Mangematin'}
                                job={"DEV Full-Stack"}
                    />
                </Grid>
                <Grid item xs={3} xm={3} md={4}>
                    <CardMember name={"Valentin"}
                                family={'Charbonnier'}
                                job={"Dev Back-End"}
                    />
                </Grid>
            </Grid>
        </section>
    );
};

export default Team;