import React from 'react';
import { IAppProps } from '../interfaces';
import styled from 'styled-components';

interface StoryDivProps {
    bgColor: string;
}

export default function Story (props: IAppProps) {

    const { data } = props;

    return (
        <Wrapper bgColor={data.quotation[0].bgColor}>
            <div className="container">
                <div className="offset-md-2 col-md-8 offset-md-2">
                    <div className="top">
                        {data.quotation[0].sentence}
                    </div>
                    <div className="bottom">
                        {data.quotation[0].from}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background: ${(props: StoryDivProps) => props.bgColor};
    height: auto;
    padding: 100px 0;   
    font-size: 1.15em;
    .container{
        margin-top: 5em;
        margin-bottom: 5em;
        text-align: center;
    }
    .top{
        padding-bottom: 1em;
    }
`
