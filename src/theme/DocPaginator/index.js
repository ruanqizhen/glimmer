import React from 'react';
import DocPaginator from '@theme-original/DocPaginator';
import Giscus from '@giscus/react';
import {useColorMode} from '@docusaurus/theme-common';

export default function DocPaginatorWrapper(props) {
  const {colorMode} = useColorMode();

  return (
    <>
      <DocPaginator {...props} />
	  <br />
	  <Giscus
		repo='ruanqizhen/glimmer'
		repoId='R_kgDORJsBGQ'
		category='Announcements'
		categoryId='DIC_kwDORJsBGc4C1_EK'
		mapping='pathname'
		strict='1'
		reactionsEnabled='1'
		emitMetadata='1'
		inputPosition='top'
		theme={colorMode}
		lang='zh-CN'
        loading="lazy"
	  />
    </>
  );
}
